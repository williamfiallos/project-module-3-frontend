import React, { Component } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class CarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    axios
      .get(`${process.env.REACT_APP_API_URL}/car-details/${params.carid}`, {
        withCredentials: true
      })
      .then(responseFromApi => {
        this.setState(responseFromApi.data);
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  render() {
    console.log("State of carid ", this.state);
    const {
      title,
      images,
      condition,
      cylinders,
      drive,
      fuel,
      odometer,
      paintColor,
      transmission,
      type,
      description,
      price
    } = this.state;
    return (
      <Container>
        <Row className="detailListing">
          <Col>
            <p>{title}</p>

            {images.map((eachImage, i) => {
              return <img src={eachImage} key={i} alt="text" width="300px" />;
            })}

            <p>Description from seller:</p>
            <p>{description}</p>
          </Col>
          <Col>
            <div className="text-center">
              <p>${price}</p>
              <button className="button">Contact the owner</button>
              <br />
              <button className="button">Add to favorite</button>
              <p>Key Details</p>
            </div>
            <Row>
              <Col>
                <div className="text-right">
                  <p>Condition:</p>
                  <p>Cylinders:</p>
                  <p>Drive:</p>
                  <p>Fuel:</p>
                  <p>Odometer:</p>
                  <p>Paint Color:</p>
                  <p>Transmission:</p>
                  <p>Type:</p>
                </div>
              </Col>
              <Col>
                <p>{condition}</p>
                <p>{cylinders}</p>
                <p>{drive}</p>
                <p>{fuel}</p>
                <p>{odometer}</p>
                <p>{paintColor}</p>
                <p>{transmission}</p>
                <p>{type}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CarDetails;
