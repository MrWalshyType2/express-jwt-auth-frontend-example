import React, { useState } from "react";
import { Link } from 'react-router-dom';
import NavigationLink from "./NavigationLink";
import InMemoryJwtManager from "../../utils/InMemoryJwtManager";
import RedirectableRoute from "../RedirectableRoute";

function NavigationBar(props) {

    const [toggled, setToggled] = useState(false);

    function toggleMenu(event) {
        setToggled(previousState => {
            return !previousState;
        });
    }

    /**
     * Remove the token stored in memory and set the loggedIn state in AppRouter to false.
     */
    function logout() {
        InMemoryJwtManager.removeToken();
        props.setLoggedIn(false);
    }

    return (
        <nav id="navbar">
            <Link id='toggle' to="#" onClick={toggleMenu}>MENU</Link>
            <NavigationLink to="/" value="Home" toggled={toggled} />

            {/* if logged in, render the members navbar, otherwise render the login and register buttons */}
            <RedirectableRoute predicate={props.loggedIn} isTrue = {
                // we can pass components as props to be rendered inside other components
                <>
                    <NavigationLink to="/member" value="Members Zone" toggled={toggled} />
                    <Link className="nav-link" to="#" onClick={logout}>Logout</Link>
                </> 
            } isFalse={
                <> 
                    <NavigationLink to="/login" value="Login" toggled={toggled} />
                    <NavigationLink to="/register" value="Register" toggled={toggled} />
                </>
            } />
        </nav>
    )
}

export default NavigationBar;