import React, { useState } from "react";
import InMemoryJwtManager from "../utils/InMemoryJwtManager";
import AuthenticationService from '../utils/AuthenticationService';

export default function Login({ setLoggedIn }) {

    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleChange = event => setUser(previousState => {
        return Object.assign({ ...previousState },
                             { [event.target.name]: event.target.value });
    });

    const handleSubmit = event => {
        event.preventDefault();

        AuthenticationService.login(user)
            .then(response => response.json())
            .then(data => {
                InMemoryJwtManager.setToken(data.token);
                setLoggedIn(true);
            }).catch(err => {
                // handle error
            });
    }

    return (
        <main>
            <h2>Login to your account</h2>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" defaultValue={user.username} required onChange={handleChange} />

                <br />

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password" defaultValue={user.password} required onChange={handleChange} />

                <br />

                <button type="button" onClick={handleSubmit}>Login</button>
            </form>
        </main>
    )
}