import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import axios from "axios";

class EditListing extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.state) {
      const listingType = this.props.location.state.listings[
        this.props.location.state.index.i
      ];
      const {
        title,
        images,
        price,
        description,
        address,
        houseType,
        squareFeet,
        totalRooms,
        totalBathrooms,
        parking,
        petsAllowed,
        condition,
        cylinders,
        drive,
        fuel,
        odometer,
        paintColor,
        transmission,
        type
      } = listingType;
      this.state = {
        title,
        images,
        price,
        description,
        address,
        houseType,
        squareFeet,
        totalRooms,
        totalBathrooms,
        parking,
        petsAllowed,
        condition,
        cylinders,
        drive,
        fuel,
        odometer,
        paintColor,
        transmission,
        type,
        submitSuccesfull: false
      };
    }
    // this.state= {
    //     submitSuccesful: false,
    // }
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const listingType = this.props.location.state.listings[
      this.props.location.state.index.i
    ];
    const id = this.props.location.state.listings[
      this.props.location.state.index.i
    ]._id;

    if (listingType.postType === "car") {
      axios
        .put(`${process.env.REACT_APP_API_URL}/car-update/${id}`, this.state, {
          withCredentials: true
        })
        .then(responseFromApi => {
          this.setState({ submitSuccessful: true });
        })
        .catch(err => console.log(err));
    } else {
      axios
        .put(`${process.env.REACT_APP_API_URL}/house-update/${id}`, this.state, {
          withCredentials: true
        })
        .then(responseFromApi => {
          this.props.history.push("/");
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    if (this.state === null) {
      return <Redirect to="/" />;
    }
    const listingType = this.props.location.state.listings[
      this.props.location.state.index.i
    ].postType;
    console.log("HELLO LISTING TYPE", listingType);

    if (listingType === "car") {
      return (
        <div className="postForm">
          <h1>EDIT POST</h1>
          <form onSubmit={event => this.handleSubmit(event)}>
            <label> Title: </label>
            <input
              name="title"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.title}
            />
            <br />
            <label> Price: $ </label>
            <input
              name="price"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.price}
            />
            <br />
            <label> Description: </label>
            <input
              name="description"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.description}
            />
            <br />
            <label> Type: </label>
            <input
              name="type"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.type}
            />
            <br />
            <label> Condition: </label>
            <input
              name="condition"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.condition}
            />
            <br />
            <label> Cylinders: </label>
            <input
              name="cylinders"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.cylinders}
            />
            <br />
            <label> Drive: </label>
            <input
              name="drive"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.drive}
            />
            <br />
            <label> Fuel: </label>
            <input
              name="fuel"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.fuel}
            />
            <br />
            <label> Odometer: </label>
            <input
              name="odometer"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.odometer}
            />
            <br />
            <label> Paint Color: </label>
            <input
              name="paintColor"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.paintColor}
            />
            <br />
            <label> Transmission: </label>
            <input
              name="transmission"
              type="text"
              onChange={event => this.genericSync(event)}
              value={this.state.transmission}
            />
            <br />

            <button className="button"> Post Ad </button>
          </form>
        </div>
      );
    }
    return (
      <section className="postForm">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label> Title: </label>
          <input
            name="title"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.title}
          />
          <br />
          <label> Price: </label>
          <input
            name="price"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.price}
          />
          <br />
          <label> Description: </label>
          <input
            name="description"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.description}
          />
          <br />
          <label> Address: </label>
          <input
            name="address"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.address}
          />
          <br />
          <label> House Type: </label>
          <input
            name="houseType"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.houseType}
          />
          <br />
          <label> Square Footage: </label>
          <input
            name="squareFeet"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.squareFeet}
          />
          <br />
          <label> Total Rooms: </label>
          <input
            name="totalRooms"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.totalRooms}
          />
          <br />
          <label> Total Bathrooms: </label>
          <input
            name="totalBathrooms"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.totalBathrooms}
          />

          <br />
          <label> Parking Spaces: </label>
          <input
            name="parking"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.parking}
          />
          <br />
          <label> Pet Friendly: </label>
          <input
            name="petsAllowed"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.petsAllowed}
          />
          <br />
          <label> Images: </label>
          <input
            type="file"
            // onChange is standard, but note for IMAGE it is UPLOADIMAGE!! Note "event" can be also "e"
            onChange={event => this.uploadImage(event)}
            multiple
          />
          <br />
          <button className="button">Post Ad</button>
        </form>
      </section>
    );
  }
}

export default EditListing;
