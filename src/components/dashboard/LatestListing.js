import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

class LatestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestListings: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/all-listings", { withCredentials: true })
      .then(responseFromApi => {
        this.setState({ latestListings: responseFromApi.data });
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  render() {
    console.log("Latest listings: ", this.state.latestListings);
    const { latestListings } = this.state;

    return (
        <Carousel>
          {latestListings.map(eachListing => {
            return (
              <Carousel.Item
              key={eachListing._id}>
                <img
                  className="d-block w-100"
                  src={eachListing.images[0]}
                  alt={eachListing.title}
                />
                <Carousel.Caption>
                  <h3>{eachListing.title}</h3>
                  <p>${eachListing.price}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
    );
  }
}

export default LatestListing;
