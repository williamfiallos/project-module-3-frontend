import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

class HouseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    const { params } = this.props.match;

    axios
      .get(`${process.env.REACT_APP_API_URL}/house-details/${params.houseid}`, {
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
    console.log("House ID", this.state);
    const {
      title,
      images,
      address,
      houseType,
      squareFeet,
      totalRooms,
      totalBathrooms,
      parking,
      petsAllowed,
      price,
      description
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
                  <p>Address:</p>
                  <p>House Type:</p>
                  <p>Square Feet:</p>
                  <p>Total Rooms:</p>
                  <p>Total Bathrooms:</p>
                  <p>Parking:</p>
                  <p>Pets Allowed:</p>
                </div>
              </Col>
              <Col>
                <p>{address}</p>
                <p>{houseType}</p>
                <p>{squareFeet}</p>
                <p>{totalRooms}</p>
                <p>{totalBathrooms}</p>
                <p>{parking}</p>
                <p>{petsAllowed}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HouseDetails;
