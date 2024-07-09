import { useState, useEffect } from "react";

function useFetch(url, options = {}, lanzador=false, errorMesagge="Error al leer la petición"){

    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoanding, setIsLoanding] = useState(true);

    useEffect(()=>{
        setData(null);
        setIsError(false);
        setIsLoanding(true);
        if (lanzador){
            fetch(url, {...options})
            .then((response)=>{
                if (response.ok){ return response.json();}
                throw Error("Error al relizar la petición");
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
        }

    },[url,lanzador])

    return [data,isError,isLoanding];
}

export default useFetch;
