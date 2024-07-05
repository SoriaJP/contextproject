import { useState, useEffect } from "react";

function useFetch(url, options = {}, errorMesagge="Error al leer la petición"){

    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoanding, setIsLoanding] = useState(true);

    useEffect(()=>{
        setData(null);
        setIsError(false);
        setIsLoanding(true);

        fetch(url, {...options})
            .then((response)=>{
                if (response.ok){ return response.json();}
            })
            .then((data)=>{
                setData(data);
            })
            .catch((e)=>{
                setIsError(true);
            })
            .finally(()=>{
                setIsLoanding(false);
            })

    },[url])

    return [data,isError,isLoanding];
}

export default useFetch;
