import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AllHouses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allHouses: []
    };
  }

  componentDidMount() {
    // get all houses from the database first, when componentMounts first it is empty, then rerenders.
    axios
      .get(`${process.env.REACT_APP_API_URL}/all-houses`, { withCredentials: true })
      .then(responseFromApi => {
        this.setState({ allHouses: responseFromApi.data });
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  render() {
    console.log("All Houses", this.state.allHouses); // <= test if the database was sending the right information, good.
    const { allHouses } = this.state;
    return (
      <Container>
        <Row className="allListings">
          {allHouses.map(eachHouse => {
            return (
              <Col>
                <Link to={`/housing/${eachHouse._id}`}>
                  <img
                    className="allHouseImage"
                    src={eachHouse.images[0]}
                    alt={eachHouse.title}
                  />
                </Link>
                <p>{eachHouse.title}</p>
                <p>{eachHouse.price}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllHouses;
