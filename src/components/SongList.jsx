import React, { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch";
import SongCard from "./SongCard";

function SongList(){
   
    const [songs, isError, isLoading] = useFetch("https://sandbox.academiadevelopers.com/harmonyhub/songs/");
    

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Error al cargar las canciones.</p>;
    if (!songs || songs.length === 0) return <p>No hay canciones disponibles</p>;

    return (
        <div>
            <h2>Lista de Canciones</h2>
            <div className="columns is-multiline">
                {songs.map((song) => (
                    <div key={song.id} className="column is-two-thirds">
                        <SongCard song={song}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default SongList;
