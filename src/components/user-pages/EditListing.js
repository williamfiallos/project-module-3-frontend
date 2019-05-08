import React, { Component } from 'react';
import axios from 'axios';

class EditListing extends Component {
    constructor(props) {
        super(props);
        // const { title, images, price, description, address, houseType, squareFeet, totalRooms, totalBathrooms, parking, petsAllowed } = this.props.state
        this.state = { 
            // title,
            // images,
            // price,
            // description,
            // address,
            // houseType,
            // squareFeet,
            // totalRooms,
            // totalBathrooms,
            // parking,
            // petsAllowed,
         }
    }

    handleSubmit(event){

        const listingType = this.props.location.state.listings[this.props.location.state.index.i];
        const id = this.props.location.state.listings[this.props.location.state.index.i]._id;

        console.log("EFEAFEFAE", listingType);
        console.log('stupid ass id', id);
        // console.log('=====',this.props.location.state);
        // console.log('INDEX',this.props.location.state.index.i);
        // console.log('LISTINGS',this.props.location.state.listings);
        // console.log('ID OF LISTING',this.props.location.state.listings[this.props.location.state.index.i])

        axios.get()

    
        if(listingType.postType === "car"){
    
          axios
          .put(`http://localhost:3001/api/car-update/${id}`, this.state, { withCredentials: true })
          .then(responseFromApi => {
              this.props.history.push('/myaccount/mylistings'); 
          })
          .catch(err => console.log(err));
    
        }else {
          axios
          .put(`http://localhost:3001/api/car-update/${id}`, this.state, { withCredentials: true })
          .then(responseFromApi => {
              this.props.history.push('/myaccount/mylistings'); 
          })
          .catch(err => console.log(err));
        }


    }
    

    render() { 
        


        
        return ( 
            <div>
                <h1>EDIT TESTER</h1>
            </div>
         );
    }
}
 
export default EditListing;