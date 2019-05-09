import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";


// axios calls the backend routes, like so: backend /api/signup", axios.CRUD
import axios from 'axios';

import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            message: null
         }
    }

    // USE THIS FOR ALL REACT FORMS!
    genericSync(event) {
       const { name, value } = event.target;
       this.setState({ [name]: value })
       // [name] is the name from the form and the state, then update that with the value being entered
    };

    handleSubmit(event) {
        event.preventDefault();
        axios.post(
            "http://localhost:3001/api/signup", // 1st mandatory: which route I am hitting in the backend
            this.state, // 2nd mandatory: what I am sending (in this case POST route, need to send something. For GET route, this is not mandatory)
            { withCredentials: true } // 3rd optional: "credentials: true" (in CORS/App.js backend) which allows frontend to comminucate with backend
        )
        .then( responseFromServer => {
            // console.log("responseFromServer: ", responseFromServer); destructure:
            const { userInfo } = responseFromServer.data
            // sending userInfo back to parent through props like so:
            this.props.onUserChange(userInfo);
        })

        .catch(err => {
            // console.log("error while signup: ", err.response);
            // in req, res, next; "response" is an object that has many fields, therefore we must dig deeper like so placeholder.response.data.message.
            // (req, res, next) is/are sent as a json file from the backend
            if (err.response && err.response.data){
                return this.setState({ message: err.response.data.message });
            }
        })
    }


    render() { 
        // this.props is how you access the props from the parent component. From the parent component we send to the child component as this.state
        if ( this.props.currentUser ) {
            return <Redirect to="/" />
        }
        return ( 
            <section className="forms">
                <form onSubmit={ event => this.handleSubmit(event) } > 
                {/* onChange updates the event per letter being entered; onSubmit is the clicking of button */}
                    <label> Email: </label>
                    <input 
                        name = "email"
                        value = { this.state.email }
                        onChange = { event => this.genericSync(event) }
                        type = "email"
                        placeholder = "johnsmith@email.com"
                    />
                    <br />
                    <label> Password: </label>
                    <input 
                        name = "password"
                        value = { this.state.password }
                        onChange = { event => this.genericSync(event) }
                        type = "password"
                        placeholder = "*********"
                    />
                    <br />
                    <label> First Name: </label>
                    <input 
                        name = "firstName"
                        value = { this.state.firstName }
                        onChange = { event => this.genericSync(event) }
                        type = "firstName"
                        placeholder = "John"
                    />
                    <br />
                    <label> Last Name: </label>
                    <input 
                        name = "lastName"
                        value = { this.state.lastName }
                        onChange = { event => this.genericSync(event) }
                        type = "lastName"
                        placeholder = "Smith"
                    />
                    <br />
                    <button className="button"> Sign Up </button>
                </form>

                {/* if statement: if both, leftSide && rightSide, are true (or not null as stated in the state), 
                display rightSide (which is the actual message) */}
                { this.state.message && <div> { this.state.message } </div> } 
                {/* rightSide is wrapped in div because you cannot have a child HTML */}

            </section>
        );
    }
}
 
export default Signup;