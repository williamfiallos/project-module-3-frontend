import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AllCars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCars: []
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/all-cars`, { withCredentials: true })
      .then(responseFromApi => {
        this.setState({ allCars: responseFromApi.data });
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  render() {
    console.log("All Cars", this.state.allCars);
    const { allCars } = this.state;
    return (
      <section>
        <Container>
          <Row className="allListings">
            {allCars.map(eachCar => {
              return (
                <Col key={eachCar._id}>
                  <Link to={`/cars/${eachCar._id}`}>
                    <img
                      className="allCarsImage"
                      src={eachCar.images[0]}
                      alt={eachCar.title}
                    />
                  </Link>
                  <p>{eachCar.title}</p>
                  <p>{eachCar.price}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}

export default AllCars;
