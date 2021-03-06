import React, { Component } from "react";
import LatestListing from "./LatestListing";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <LatestListing />

        <Container>
          <Row>
            <Col className="shadowBG">
              <h1 className="boxHeader">My Account</h1>
              <hr />
              <Link to={"/myaccount/mylistings"}>
                <p>My Listings</p>
              </Link>
              <p>Saved Postings</p>
              <p>Account information</p>
              <p>Account Settings</p>
            </Col>
            <Col className="shadowBG">
              <h1 className="boxHeader">Community</h1>
              <hr />
              <p>Activities</p>
              <p>Artists</p>
              <p>Child Care</p>
              <p>Classes</p>
              <p>General</p>
              <p>Groups</p>
            </Col>
            <Col className="shadowBG">
              <h1 className="boxHeader">Personal</h1>
              <hr />
              <p>Flatmate wanted</p>
              <p>Road trips seeking</p>
              <p>Relationships seeking</p>
              <p>Business advice needed</p>
              <p>Free tickets for food show</p>
              <p>Office space needed</p>
            </Col>
          </Row>
          <Row className="bottomBox">
            <Col className="shadowBG">
              <h1 className="boxHeader">For Sale</h1>
              <hr />
              <p>Antiques</p>
              <p>Appliances</p>
              <p>Arts + Crafts</p>
              <p>Autoparts</p>
              <p>Baby + kids</p>
              <p>Beauty</p>
              <p>Bikes</p>
              <p>Boats</p>
              <p>Books</p>
              <p>Business</p>
              <Link to={"/forsale/cars"}>
                <p>Cars</p>
              </Link>
              <p>Cellphones</p>
            </Col>
            <Col className="shadowBG">
              <h1 className="boxHeader">Housing</h1>
              <hr />
              <p>Apartments</p>
              <p>Commercial</p>
              <Link to={"/forsale/housing"}>
                <p>Housing</p>
              </Link>
              <p>Housing Swap</p>
              <p>Housing Wanted</p>
              <p>Office</p>
              <p>Parking / Storage</p>
              <p>Vacation Rentals</p>
              <p>Real estate</p>
              <p>Rooms Wanted</p>
              <p>Sublets</p>
            </Col>
            <Col className="shadowBG">
              <h1 className="boxHeader">Jobs</h1>
              <hr />
              <p>Accounting</p>
              <p>Art / Design</p>
              <p>Business</p>
              <p>Customer Service</p>
              <p>Education</p>
              <p>Food</p>
              <p>General Labor</p>
              <p>Government</p>
              <p>Human Resources</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Dashboard;
