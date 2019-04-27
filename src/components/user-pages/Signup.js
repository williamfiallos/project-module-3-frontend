import React, { Component } from 'react';

// axios calls the backend routes, like so: backend /api/signup", axios.CRUD
import axios from 'axios';

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
            console.log("responseFromServer: ", responseFromServer);
            const { userInfo } = this.responseFromServer.data
            this.props.onUserChange(userInfo);
        })

        .catch(err => {
            console.log("error while signup: ", err);
            if (err.response && err.response.data){
                return this.setState({ message: err.response.data.message });
            }
        })
    }


    render() { 
        return ( 
            <section>
                <form onSubmit={ event => this.handleSubmit(event) } > 
                {/* onChange updates the event per letter being entered; onSubmit is the clicking of button */}
                    <label> Email </label>
                    <input 
                        name = "email"
                        value = { this.state.email }
                        onChange = { event => this.genericSync(event) }
                        type = "email"
                        placeholder = "johnsmith@email.com"
                    />
                    <label> Password </label>
                    <input 
                        name = "password"
                        value = { this.state.password }
                        onChange = { event => this.genericSync(event) }
                        type = "password"
                        placeholder = "*********"
                    />
                    <label> First Name </label>
                    <input 
                        name = "firstName"
                        value = { this.state.firstName }
                        onChange = { event => this.genericSync(event) }
                        type = "firstName"
                        placeholder = "John"
                    />
                    <label> Last Name </label>
                    <input 
                        name = "lastName"
                        value = { this.state.lastName }
                        onChange = { event => this.genericSync(event) }
                        type = "lastName"
                        placeholder = "Smith"
                    />

                    <button> Sign Up </button>

                </form>
            </section>
        );
    }
}
 
export default Signup;