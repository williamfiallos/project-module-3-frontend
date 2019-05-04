import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

class HouseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            images: [],
         }
    }

    componentDidMount() {

        const { params } = this.props.match;
    
        axios
          .get(`http://localhost:3001/api/house-details/${params.houseid}`, { withCredentials: true })
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
        const { title, images, address, houseType, squareFeet, totalRooms, totalBathrooms, parking, petsAllowed, price, description } = this.state
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
                        <p>Address: {address}</p>
                        <p>House Type: {houseType}</p>
                        <p>Square Feet: {squareFeet}</p>
                        <p>Total Rooms: {totalRooms}</p>
                        <p>Total Bathrooms: {totalBathrooms}</p>
                        <p>Parking: {parking}</p>
                        <p>Pets Allowed: {petsAllowed}</p>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default HouseDetails;