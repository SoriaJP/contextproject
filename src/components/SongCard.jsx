import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function SongCard({ song}) {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`card ${
            theme === "light"
                ? "has-background-light"
                : "has-background-dark"
        }`}>
            <div className={`card-content${
            theme === "light"
                ? "has-background-light"
                : "has-background-dark"
        }`}>
                <div className="media">
                    <div className="media-content">
                        <p className={`title is-4 ${
            theme === "light"
                ? "has-text-dark"
                : "has-text-light"
        }`}>
            {song.title}</p>
                    </div>
                </div>
                <div className="content">
                    <audio controls>
                        <source src={song.song_file} type="audio/mpeg" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>
            </div>
        </div>
    );
}

export default SongCard;
