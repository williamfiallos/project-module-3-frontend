import React, { Component } from "react";
import axios from 'axios';
import {Carousel} from "react-bootstrap";



class LatestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestListings: []
    };

  }

  componentDidMount(){
    axios.get(
      "http://localhost:3001/api/all-listings",
      { withCredentials: true}
    )
    .then(responseFromApi => {
      this.setState({latestListings : responseFromApi.data})
    })
    .catch( err => { 
      if (err.response && err.response.data)
      return this.setState({ message: err.response.data.message })
   } )
  }



  render() {
    console.log("teteteatet", this.state.latestListings);
    
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://farm3.static.flickr.com/2838/10563060763_9dc5dd3443_b.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/da/b4/e1/dab4e19f30983587f1d57271b090fae9.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://farm6.staticflickr.com/5547/9400118576_0a4cf11a72_b.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    );
  }
}

export default LatestListing;
