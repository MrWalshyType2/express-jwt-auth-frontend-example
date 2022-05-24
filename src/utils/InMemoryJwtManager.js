/* It is important to note, the current design only allows for you to be logged in on one page, this was to keep
 * the example simpler. If looking to persist between tabs, you will need to look into setting up a storage 
 * solution for persisting data between tabs, localstorage is an easy example but suffers from XSS vulnerabilities.
 */

import AuthenticationService from "./AuthenticationService";

function InMemoryJwtManager() {
    let jwt = null; // the stored token
    let refreshId = null; // the id of the refresh timeout applied to the window

    /**
     * Returns the currently stored in-memory JWT.
     * @returns string representing the currently stored JWT
     */
    const getToken = () => jwt;

    /**
     * Sets the given JWT and a refresh rate for the token based on its expiration in seconds.
     * @param {string} token 
     * @param {int} tokenExpiration 
     */
    const setToken = (token, tokenExpiration) => {
        console.log(tokenExpiration)
        jwt = token;
        refreshToken(tokenExpiration);
    };

    /**
     * Use to set a token refresh event as a timeout on the global window 
     * object, this refresh occurs 60 seconds before the time to expiration.
     * @param {int} expiration 
     */
    const refreshToken = expiration => {
        const delayInSeconds = expiration - 60; // 60 seconds before expiration
        console.log(delayInSeconds);

        refreshId = window.setTimeout(() => {
            console.log('refreshing token');
            AuthenticationService.refresh()
                .then(response => response.json())
                .then(data =>  setToken(data.token, data.expiration))
                .catch(console.error);
        }, delayInSeconds * 1000); // setTimeout takes a time in milliseconds, so we convert seconds to milliseconds
    }

    /**
     * Use to remove the refresh listener added by setting a token.
     */
    const abortRefresh = () => {
        if (refreshId) {
            window.clearTimeout(refreshId);
        }
    }

    /**
     * Use to remove the currently stored in memory token, also
     * stops the currently running refresh timer.
     */
    const removeToken = () => {
        jwt = null;
        abortRefresh();
    };

    return {
        getToken,
        setToken,
        removeToken
    };
}

export default InMemoryJwtManager();