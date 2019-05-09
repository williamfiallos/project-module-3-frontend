import React, { Component } from "react";

import CarPostAd from "./CarPostAd";
import HousePostAd from "./HousePostAd";

class PostAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adType: ""
    };
  }

  // USE THIS FOR ALL REACT FORMS!
  genericSync(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    // [name] is the name from the form and the state, then update that with the value being entered
  }

  render() {
    return (
      <section className="postForm">
        <form>
          <select
            value={this.state.adType}
            name="adType"
            onChange={event => this.genericSync(event)}
          >
            <option value=""> </option>
            <option value="car"> Car Post </option>
            <option value="house"> House Post </option>
          </select>
        </form>
        {this.state.adType === "car" ? (
          <CarPostAd />
        ) : this.state.adType === "house" ? (
          <HousePostAd />
        ) : null}
      </section>
    );
  }
}

export default PostAd;
