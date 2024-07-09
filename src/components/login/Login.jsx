import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";


export default function(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [lanzador, setLanzador] = useState(false);

    const [data, isError, isLoanding] = useFetch("https://sandbox.academiadevelopers.com/api-auth/",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({username,password}),    
    },lanzador);   

     useEffect(()=>{
        console.log(data);
        if (data && !isError && lanzador){
            window.location.href="/songList";
        }
    },[data, isError, lanzador]);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setLanzador(true);
    }

    const handleChange = (event)=>{
        const {name, value} = event.target;
        if(name==="username") setUsername(value);
        if(name==="password") setPassword(value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="username">Usuario:</label>
                <input
                    className="input"
                    id='username'
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
            </div>
            <div className="field">
                <label htmlFor="password">Contraseña:</label>
                <input
                    className="input"
                    type='password'
                    id='password'
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <div className="field">
                <button type= "submit" className="button is-primary">Enviar</button>
            </div>
        </form>
    )
}
