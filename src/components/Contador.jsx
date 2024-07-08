import { React, useState } from "react";

export default function Contador(){
    const [contador, setContador] = useState(0);

    const sumar = () => { setContador(contador + 1);}
    const restar = () => {setContador(contador - 1);}
    const restar5 = () => {setContador(contador - 5);}
    const sumar5 = () => {setContador(contador - 5);}
    const reset = () => {setContador(0);}

    return(
        <div className="block" style={{textAlign:"center"}}>
            <p className="title is-2"> Contador simple</p>
            <p className="title is-4">{contador}</p>
            <button className="button is-primary is-outlined is-small" onClick={restar5}>- 5</button>
            <button className="button is-primary is-outlined is-small" onClick={restar}>-</button>
            <button className="button is-primary is-outlined is-small" onClick={reset}>0</button>
            <button className="button is-primary is-outlined is-small" onClick={sumar}>+</button>
            <button className="button is-primary is-outlined is-small" onClick={sumar}>+ 5</button>
        </div>
    );
}