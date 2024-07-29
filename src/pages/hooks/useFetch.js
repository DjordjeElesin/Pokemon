import React, {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const oneSecond = 1000;

    useEffect(() => {
        
         axios.get(url)
        .then((response) => 
            setData(response.data)
        )
        .catch((error) => {
            console.error(error);
            setError(error) 
        })
    }, [url]);

    return {data, error}
}

export default useFetch;