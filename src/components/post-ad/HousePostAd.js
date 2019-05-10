import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class HousePostAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      images: [],
      price: "",
      description: "",
      address: "",
      houseType: "",
      squareFeet: "",
      totalRooms: "",
      totalBathrooms: "",
      parking: "",
      petsAllowed: "",
      isSubmitSuccessfull: false
    };
  }

  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios               
      .post(`${process.env.REACT_APP_API_URL}/house-post`, this.state, {
        withCredentials: true
      })
      .then(responseFromServer => {
        this.setState({ isSubmitSuccessful: true });
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  uploadImage(event) {
    const { files } = event.target;
    const uploadData = new FormData();

    for (let i = 0; i < files.length; i++) {
      uploadData.append("submittedFile", files[i]);
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/upload-file`, uploadData, {
        withCredentials: true
      })
      .then(response => {
        const theImages = [];
        response.data.forEach(oneFile => theImages.push(oneFile.fileUrl));
        this.setState({ images: theImages });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.isSubmitSuccessful) {
      return <Redirect to="/" />;
    }
    return (
      <section>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label> Title: </label>
          <input
            name="title"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.title}
            placeholder="post title"
          />
          <br />
          <label> Price: </label>
          <input
            name="price"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.price}
            placeholder="$"
          />
          <br />
          <label> Description: </label>
          <input
            name="description"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.description}
            placeholder="describe house here"
          />
          <br />
          <label> Address: </label>
          <input
            name="address"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.address}
            placeholder="address"
          />
          <br />
          <label> House Type: </label>
          <input
            name="houseType"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.houseType}
            placeholder="apt/condo, efficiency, studio, townhouse"
          />
          <br />
          <label> Square Footage: </label>
          <input
            name="squareFeet"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.squareFeet}
            placeholder="square footage"
          />
          <br />
          <label> Total Rooms: </label>
          <input
            name="totalRooms"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.totalRooms}
            placeholder="total number of rooms"
          />
          <br />
          <label> Total Bathrooms: </label>
          <input
            name="totalBathrooms"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.totalBathrooms}
            placeholder="2"
          />

          <br />
          <label> Parking Spaces: </label>
          <input
            name="parking"
            type="number"
            onChange={event => this.genericSync(event)}
            value={this.state.parking}
            placeholder="parking spaces"
          />
          <br />
          <label> Pet Friendly: </label>
          <input
            name="petsAllowed"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.petsAllowed}
            placeholder="yes/no"
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

export default HousePostAd;
