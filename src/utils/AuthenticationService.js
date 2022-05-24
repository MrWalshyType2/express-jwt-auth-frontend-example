import InMemoryJwtManager from "./InMemoryJwtManager";

// setup the URLs for sending requests to
const API_URL = process.env.API_URL || "http://localhost:5500"

const URL = {
    LOGIN: `${API_URL}/login`,
    REGISTER: `${API_URL}/register`,
    REFRESH: `${API_URL}/refresh`
}

/**
 * Sends a login request to the API, returns a promise representing the response.
 * @param {*} data 
 * @returns 
 */
const login = (data) => {
    return fetch(URL.LOGIN, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

/**
 * Sends a register request to the API, returns a promise representing the response.
 * @param {*} data 
 * @returns 
 */
const register = (data) => {
    return fetch(URL.REGISTER, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

/**
 * Sends a request to refresh the current JWT access token for the API, if the current
 * access token is invalid or the user doesn't have a valid refresh token cookie, the
 * request will fail. Returns a promise representing the response.
 * @returns 
 */
const refresh = () => {
    return fetch(URL.REFRESH, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Authorization': `Bearer ${InMemoryJwtManager.getToken()}`
        }
    });
}

export default {
    login,
    register,
    refresh
}