import React, { Component } from "react";
import axios from "axios";

class EditListing extends Component {
  constructor(props) {
    super(props);
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
      type
    };
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

    // console.log("EFEAFEFAE", listingType);
    // console.log("id", id);
    // console.log('=====',this.props.location.state);
    // console.log('INDEX',this.props.location.state.index.i);
    // console.log('LISTINGS',this.props.location.state.listings);
    // console.log('ID OF LISTING',this.props.location.state.listings[this.props.location.state.index.i])

    if (listingType.postType === "car") {
      axios
        .put(`http://localhost:3001/api/car-update/${id}`, this.state, {
          withCredentials: true
        })
        .then(responseFromApi => {
          this.props.history.push("/myaccount/mylistings");
        })
        .catch(err => console.log(err));
    } else {
      axios
        .put(`http://localhost:3001/api/car-update/${id}`, this.state, {
          withCredentials: true
        })
        .then(responseFromApi => {
          this.props.history.push("/myaccount/mylistings");
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    console.log("the state", this.state);
    return (
      <div>
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
         
          <button> Post Ad </button>
        </form>

      </div>
    );
  }
}

export default EditListing;
