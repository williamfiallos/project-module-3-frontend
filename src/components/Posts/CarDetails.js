import React, { Component} from 'react';
import axios from 'axios';


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class CarDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      images:[]
     }
  }

  componentDidMount() {

    const { params } = this.props.match;

    axios
      .get(`http://localhost:3001/api/car-details/${params.carid}`, { withCredentials: true })
      .then(responseFromApi => {
        this.setState(responseFromApi.data);
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  render() { 
    console.log("State of carid ", this.state );
    const { title, images, condition, cylinders, drive, fuel, odometer, paintColor, transmission, type, description, price} = this.state;
    return (
        <Container>
          <Row>
          <Col>
          <p>{title}</p>

          {
            images.map((eachImage, i) => { 
              return (

                  <img src={eachImage} key={i} alt="text" width="300px"/>

              )
            })}

          <p>Description from seller:</p>
          <p>{description}</p>
          </Col>
          <Col>
          <p>${price}</p>
          <button>Contact the owner</button>
          <br />
          <button>Add to favorite</button>
          <p>Key Details</p>
          <p>Condition: {condition}</p>
          <p>Cylinders: {cylinders}</p>
          <p>Drive: {drive}</p>
          <p>Fuel: {fuel}</p>
          <p>Odometer: {odometer}</p>
          <p>Paint Color: {paintColor}</p>
          <p>Transmission: {transmission}</p>
          <p>Type: {type}</p>
          </Col>
          </Row>
        </Container>
      );
  }
}
 
export default CarDetails;

