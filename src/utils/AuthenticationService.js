import InMemoryJwtManager from "./InMemoryJwtManager";

const API_URL = process.env.API_URL || "http://localhost:5500"

const URL = {
    LOGIN: `${API_URL}/login`,
    REGISTER: `${API_URL}/register`,
    REFRESH: `${API_URL}/refresh`
}

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