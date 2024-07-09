import {useContext, useEffect, useState} from "react"
import SongList from "./components/SongList"
import FooterBar from "./components/FooterBar";
import NavBar from "./components/NavBar";
import ChangeTheme from "./contexts/ThemeContext";
import Login from "./components/login/Login";
import { AuthContext } from "./contexts/AuthContext";

function App() {

    const {state} = useContext(AuthContext);
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(()=>{
        if(state.isAuthenticated){
            setCurrentPath("/songs");
        }else{
            setCurrentPath("/login");
        } 
    },[state.isAuthenticated]);

    return(
        <>
            <ChangeTheme>
                <NavBar />
                <div className={`container`}>
                    {currentPath === "/login" ? <Login /> : <SongList />}
                </div>
                <FooterBar
                     appName={"React Examples"}
                     socialNetworks={[
                         { name: "facebook", url: "https://facebook.com" },
                         { name: "twitter", url: "https://twitter.com" },
                         { name: "instagram", url: "https://instagram.com" },
                     ]}
                />
            </ChangeTheme>
        </>
    );

}

export default App

