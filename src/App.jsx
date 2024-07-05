import {useState} from "react"
import useTheme from "./hooks/useTheme";
import SongList from "./components/SongList"
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
//import ChangeTheme from "./components/ChangeTheme";

function App() {

    const [theme, toggleTheme] = useTheme();

    return(
        <>
            <NavBar theme = {theme} toggleTheme={toggleTheme} />
            <SongList theme={theme}/>
            <br/>
            <FooterBar theme={theme}/>
        </>
    );

}

export default App

