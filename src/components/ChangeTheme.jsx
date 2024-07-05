import { useState, useEffect } from "react";
import useChageTheme from "../hooks/useTheme";

export default function ChangeTheme(){

    const [count, setCount] = useState(0);
    const onHadleclick = ()=>{setCount(count + 1);}

    const [theme, ToggleTheme] = useChageTheme();

    return(
        //"has-background-light has-text-dark"
        <div className={
            `section ${theme === 'light'
                ? 'has-background-light has-text-dark'
                : 'has-background-dark has-text-light'}`
        }>
            <h2 className="">Contar: {count}</h2>
            <button className="button is-primary" onClick={onHadleclick}>contar</button>
            <br />
            <br />
            <h3>El tema actual es {theme}</h3>
            <button className={`button ${
                theme === 'light'
                ? 'is-dark'
                : 'is-primary'
            }`} onClick={ToggleTheme}>cambiar de tema</button>
        </div>
    );
}