import React, { Component } from 'react';
import axios from 'axios';

class MyListings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            myListings: [],
         }
    }

    componentDidMount() {
        axios
          .get("http://localhost:3001/api/my-listings", { withCredentials: true })
          .then(responseFromApi => {
            this.setState({ myListings: responseFromApi.data });
          })
          .catch(err => {
            if (err.response && err.response.data)
              return this.setState({ message: err.response.data.message });
          });
      }

    render() { 
        console.log("new state: ", this.state.myListings);
        const {myListings} = this.state;

        return ( 
            
            <section>
                
            </section>

         );
    }
}
 
export default MyListings;