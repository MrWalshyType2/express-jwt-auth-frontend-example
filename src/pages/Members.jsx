import React, {useState, useEffect} from "react";
import InMemoryJwtManager from "../utils/InMemoryJwtManager";

export default function Members() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5500/example/members', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Authorization': `Bearer ${InMemoryJwtManager.getToken()}`
            }
        }).then(response => {
            if (response.ok) return response.text();
            throw response;
        }).then(data => setData(data))
          .catch(error => setError(error))
          .finally(() => setLoading(false));
    }, []);

    return (
        <main>
            <h2>Members only page</h2>
            {loading && <p>Loading page...</p>}
            {error && <p>Error encountered loading page...</p>}
            {data && <p>{data}</p>}
        </main>
    )
}