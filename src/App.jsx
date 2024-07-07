import {useState} from "react"
import SongList from "./components/SongList"
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import ChangeTheme from "./contexts/ThemeContext";
import Contador from "./components/Contador";

function App() {

    return(
        <>
            <Contador />
            {/*<ChangeTheme>
                <NavBar />
                <SongList />
                <br/>
                <FooterBar />
            </ChangeTheme>*/}
        </>
    );

}

export default App

