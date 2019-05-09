import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      .get(`${process.env.REACT_APP_API_URL}/my-listings`, { withCredentials: true })
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

  deleteListing(index) {
    const { myListings } = this.state;
    const id = myListings[index]._id;

    if (myListings[index].postType === "car") {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/delete-car/${id}`, {
          withCredentials: true
        })
        .then(responseFromApi => {
          this.props.history.push("/phone-list");
        })
        .catch(err => console.log(err));
    } else {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/delete-house/${id}`, {
          withCredentials: true
        })
        .then(responseFromApi => {
          this.props.history.push("/phone-list");
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    console.log("new state: ", this.state.myListings);
    const { myListings } = this.state;

    return (
      <section>
        <div className="text-center myListingTitle">
          <h1> My Listings</h1>
        </div>

        {myListings.map((eachListings, i) => {
          return (
            <section key={i}>
              <Container className="myListings">
                <Row>
                  <Col className="text-right">
                    <Link
                      to={{
                        pathname: `/myaccount/editlisting/${eachListings._id}`,
                        state: { listings: this.state.myListings, index: { i } }
                      }}
                    >
                      <button className="button">Edit</button>
                    </Link>
                    <button
                      onClick={() => this.deleteListing(i)}
                      className="button"
                    >
                      Delete
                    </button>
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
