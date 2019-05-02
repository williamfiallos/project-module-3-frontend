import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";

class CarPostAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      images: [],
      price: "",
      description: "",
      condition: "",
      cylinders: "",
      drive: "",
      fuel: "",
      odometer: "",
      paintColor: "",
      transmission: "",
      type: "",
      isSubmitSuccesfull: false,
    };
  }

  // REUSE ON ALL FORMS
  genericSync(event) {
    // name is of label | value is the state of the label
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/car-post", this.state, {
        withCredentials: true
      })
      .then(responseFromServer => {
        this.setState({isSubmitSuccessful: true});
      })
      .catch(err => {
        if (err.response && err.response.data)
          return this.setState({ message: err.response.data.message });
      });
  }

  uploadImage(event) {
    const { files } = event.target;
    const uploadData = new FormData();

    console.log("here are the files", files);

    for (let i = 0; i < files.length; i++) {
      uploadData.append("submittedFile", files[i]);
    }

    axios
      .post("http://localhost:3001/api/upload-file", uploadData, {
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
            placeholder="Car for Sale $20000"
          />
          <br />
          <label> Price: $ </label>
          <input
            name="price"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.price}
            placeholder="20,000"
          />
          <br />
          <label> Description: </label>
          <input
            name="description"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.description}
            placeholder="Selling brand new 2010 Civic"
          />
          <br />
          <label> Type: </label>
          <input
            name="type"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.type}
            placeholder="Coupe, Convertible, Sedan, Hatchback, Crossover, SUV"
          />
          <br />
          <label> Condition: </label>
          <input
            name="condition"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.condition}
            placeholder="New or Used"
          />
          <br />
          <label> Cylinders: </label>
          <input
            name="cylinders"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.cylinders}
            placeholder="2, 4, 6 or 8 etc.."
          />
          <br />
          <label> Drive: </label>
          <input
            name="drive"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.drive}
            placeholder="FWD, AWD, or RWD"
          />
          <br />
          <label> Fuel: </label>
          <input
            name="fuel"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.fuel}
            placeholder="Gas, Diesel or None / Electric"
          />
          <br />
          <label> Odometer: </label>
          <input
            name="odometer"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.odometer}
            placeholder="85k"
          />
          <br />
          <label> Paint Color: </label>
          <input
            name="paintColor"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.paintColor}
            placeholder="Black, White, Red, etc.."
          />
          <br />
          <label> Transmission: </label>
          <input
            name="transmission"
            type="text"
            onChange={event => this.genericSync(event)}
            value={this.state.transmission}
            placeholder="Automatic or Manual"
          />
          <br />
          <label>Select images: </label>
          <input
            type="file"
            name="images"
            onChange={event => this.uploadImage(event)}
            multiple
          />
          <br />
          <button> Post Ad </button>
        </form>
      </section>
    );
  }
}

export default CarPostAd;
