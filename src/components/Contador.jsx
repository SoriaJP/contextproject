import { useReducer} from "react";
import { contadorIntialState, contadorReducer } from "../reducer/contadorReducer";
import TYPES from "../actions/contadorActions";

export default function Contador(){

    const [state, dispatch] = useReducer(contadorReducer,contadorIntialState)

    return(
        <div className="block" style={{textAlign: "center"}}>
            <p className="title is-2">Contador usando useReducer </p>
            <p className="title is-4">{state.contador}</p>
            <div className="block">
                <button className="button is-primary is-outlined is-small" onClick={() => dispatch({type:TYPES.DECREMENT5, payload:5})}>-5</button>
                <button className="button is-primary is-outlined is-small" onClick={() => dispatch({type:TYPES.DECREMENT})}>-</button>
                <button className="button is-primary is-outlined is-small" onClick={() => dispatch({type:TYPES.RESTART})}>0</button>
                <button className="button is-primary is-outlined is-small" onClick={()=>dispatch({type:TYPES.INCREMENT})}>+</button>
                <button className="button is-primary is-outlined is-small" onClick={() => dispatch({type:TYPES.INCREMENT5, payload:50})}>+5</button>
            </div>
        </div>
    );
}