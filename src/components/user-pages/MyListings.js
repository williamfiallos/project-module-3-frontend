import React, { Component } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MyListings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myListings: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/my-listings", { withCredentials: true })
      .then(responseFromApi => {
        this.setState({
          myListings: [
            ...this.state.myListings,
            ...responseFromApi.data.cars,
            ...responseFromApi.data.houses
          ]
        });
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  deleteListing(index){
    const {myListings} = this.state;
    const id = myListings[index]._id;

    if(myListings[index].postType === "car"){

      axios
      .delete(`http://localhost:3001/api/delete-car/${id}`, { withCredentials: true })
      .then(responseFromApi => {
          this.props.history.push('/phone-list'); 
      })
      .catch(err => console.log(err));

    }else {
      axios
      .delete(`http://localhost:3001/api/delete-house/${id}`, { withCredentials: true })
      .then(responseFromApi => {
          this.props.history.push('/phone-list'); 
      })
      .catch(err => console.log(err));
    }
}



  render() {
    console.log("new state: ", this.state.myListings);
    const { myListings } = this.state;


    return (
      <section>
        <div className="text-center">
        <h1> My Listings</h1>
        </div>

        {myListings.map((eachListings,i) => {
          return (
            <section key={i}>
              <Container>
                <Row>
                  <Col className="text-right">
                    <button>Edit</button>
                    <button onClick={() => this.deleteListing(i)}>Delete</button>
                  </Col>
                  <Col>
                    <p>{eachListings.title}</p>
                  </Col>
                </Row>
              </Container>
            </section>
          );
        })}
      </section>
    );
  }
}

export default MyListings;
