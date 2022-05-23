function InMemoryJwtManager() {
    let jwt = null;

    const getToken = () => jwt;
    const setToken = (token) => jwt = token;
    const removeToken = () => jwt = null;

    return {
        getToken,
        setToken,
        removeToken
    };
}

export default InMemoryJwtManager();