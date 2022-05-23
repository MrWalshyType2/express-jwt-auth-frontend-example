import React, { useState } from "react";
import AuthenticationService from '../utils/AuthenticationService';

export default function Register(props) {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    });

    const handleChange = event => setUser(previousState => {
        return Object.assign({ ...previousState },
                             { [event.target.name]: event.target.value });
    });

    const handleSubmit = event => {
        event.preventDefault();

        AuthenticationService.register(user).then(response => {
            console.log(response);
            window.location = "/login";
        }).catch(err => {
            // handle error
        });
    }

    return (
        <main>
            <h2>Register an account</h2>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" defaultValue={user.username} required onChange={handleChange} />

                <br />

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password" defaultValue={user.password} required onChange={handleChange} />

                <br />

                <label htmlFor="email">Email: </label> 
                <input type="email" name="email" defaultValue={user.email} required onChange={handleChange} /> 

                <br />

                <button type="button" onClick={handleSubmit}>Register</button>
            </form>
        </main>
    )
}