import {useState} from "react"
import SongList from "./components/SongList"
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import ChangeTheme from "./contexts/ThemeContext";

function App() {

    return(
        <>
            <ChangeTheme>
                <NavBar />
                <SongList />
                <br/>
                <FooterBar />
            </ChangeTheme>
        </>
    );

}

export default App

