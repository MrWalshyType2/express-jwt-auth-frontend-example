import React, { useState } from "react";
import { Link } from 'react-router-dom';
import NavigationLink from "./NavigationLink";
import InMemoryJwtManager from "../../utils/InMemoryJwtManager";

function NavigationBar(props) {

    const [toggled, setToggled] = useState(false);

    function toggleMenu(event) {
        setToggled(previousState => {
            return !previousState;
        });
    }

    function logout() {
        InMemoryJwtManager.removeToken();
        props.setLoggedIn(false);
        window.location = '/';
    }

    return (
        <nav id="navbar">
            <Link id='toggle' to="#" onClick={toggleMenu}>MENU</Link>
            <NavigationLink to="/" value="Home" toggled={toggled} />
            {!props.loggedIn ?
                <> 
                    <NavigationLink to="/login" value="Login" toggled={toggled} />
                    <NavigationLink to="/register" value="Register" toggled={toggled} />
                </>
                :
                <>
                    <NavigationLink to="/member" value="Members Zone" toggled={toggled} />
                    <Link className="nav-link" to="#" onClick={logout}>Logout</Link>
                </> 
            }
        </nav>
    )
}

export default NavigationBar;