import {useEffect, useState} from "react"
import SongList from "./components/SongList"
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import ChangeTheme from "./contexts/ThemeContext";
import Login from "./components/login/Login";

function App() {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(()=>{
        if(currentPath === "/"){
            setCurrentPath("/login");
        }else{
            setCurrentPath("/songList");
        } 
    },[]);

    return(
        <>
            <ChangeTheme>
                <NavBar />
                {currentPath === "/login" ? <Login /> : <SongList />}
                <FooterBar />
            </ChangeTheme>
            
        </>
    );

}

export default App

