import React from "react";

/**
 * Accepts an object with three properties:
 * 
 * - predicate: the expression to test
 * - isTrue: the components to render if the predicate is true
 * - isFalse: the components to render if the predicate is false
 *
 * @returns 
 */
function RedirectableRoute({ predicate, isTrue, isFalse }) {

    if (predicate) {
        return isTrue;
    }
    return isFalse;
}

export default RedirectableRoute;