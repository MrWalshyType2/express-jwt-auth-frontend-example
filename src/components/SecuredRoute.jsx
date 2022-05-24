import React from "react";
import { Navigate, Route } from "react-router-dom";

function SecuredRoute({ loggedIn, children }) {

    if (loggedIn) {
        // render the child components
        return children;
    }
    // otherwise, redirect to /login
    return <Navigate to="/login" replace />
}

export default SecuredRoute;