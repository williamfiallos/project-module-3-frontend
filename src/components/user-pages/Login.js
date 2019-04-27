import React, { Component } from 'react';

import axios from 'axios';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            message: null
         }
    }

    // REUSE ON ALL FORMS
    genericSync(event) {
        // name is of label | value is the state of the label
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(
            "http://localhost:3001/api/login",
            this.state,
            { withCredentials: true }
        )
        .then( responseFromServer => {
            const { userInfo } = responseFromServer.data
            this.props.onUserChange(userInfo)
        } )
        .catch( err => { 
            if (err.response && err.response.data)
            return this.setState({ message: err.response.data.message })
         } )
    }


    render() { 
        return ( 
            <section>
                <form onSubmit={ event => this.handleSubmit(event) } >
                    <label> Email: </label>
                    <input 
                        name = "email"
                        type = "email"
                        onChange = { event => this.genericSync(event) }
                        value = { this.state.email }
                        placeholder = "johnsmith@email.com"
                    />
                    <label> Password: </label>
                    <input 
                        name = "password"
                        type = "password"
                        onChange = { event => this.genericSync(event) }
                        value = { this.state.password }
                        placeholder = "*********"
                    />

                    <button> Log In </button>

                </form>

            </section>
         );
    }
}
 
export default Login;