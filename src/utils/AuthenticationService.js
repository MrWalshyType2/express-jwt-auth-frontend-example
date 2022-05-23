const API_URL = process.env.API_URL || "localhost:5500"

const URL = {
    LOGIN: `${API_URL}/login`,
    REGISTER: `${API_URL}/register`
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

export default {
    login,
    register
}