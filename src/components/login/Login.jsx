import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useAuth } from "../../contexts/AuthContext";


export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [lanzador, setLanzador] = useState(false);

    const {data, isError, isLoading} = useFetch("https://sandbox.academiadevelopers.com/api-auth/",{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({username,password}),    
    },lanzador);   

    const {login} = useAuth("actions");

    const handleSubmit = (event)=>{
        event.preventDefault();
        setLanzador(true);
    }

    const handleChange = (event)=>{
        const {name, value} = event.target;
        if(name==="username") setUsername(value);
        if(name==="password") setPassword(value);
    }

    useEffect(()=>{
        console.log(data);
        if (data && !isError && lanzador){
           login();
        }
    },[data, isError, lanzador]);

    return(
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-4">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="username">Nombre de usuario:</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="password">Contraseña:</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button is-primary is-fullwidth"
                                >
                                    Enviar
                                </button>
                                {isLoading && lanzador && (
                                    <p>Cargando...</p>
                                )}
                                {isError && <p>Error al cargar los datos.</p>}
                                {data && (
                                    <p>{`Token obtenido: ${data.token}`}</p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}