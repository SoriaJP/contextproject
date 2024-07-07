import { act, useReducer } from "react";

const initialState = {contador:0};

const init = (initialState)=>{
    return ({contador: initialState.contador + 100});
};

const TYPES = {
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
    INCREMENT5:"INCREMENT5",
    DECREMENT5:"DECREMENT5",
    RESTART:"RESTART"
}

function reducer(state, action, init){
    switch(action.type){
        case TYPES.INCREMENT:
            return({contador:state.contador + 1});
        case TYPES.DECREMENT:
            return({contador:state.contador - 1});
        case TYPES.INCREMENT5:
            return({contador:state.contador + action.payload});
        case TYPES.DECREMENT5:
            return({contador:state.contador - action.payload});
        case TYPES.RESTART:
            return initialState;
        default:
            return state;
    }
}

export default function Contador(){
    const [state, dispatch] = useReducer(reducer,initialState)

    const restar5 = ()=>dispatch({type:TYPES.DECREMENT5,payload:5})
    const restar = ()=>dispatch({type:TYPES.DECREMENT})
    const iniciar = ()=>dispatch({type:TYPES.RESTART})
    const sumar = ()=>dispatch({type:TYPES.INCREMENT})
    const sumar5 = ()=>dispatch({type:TYPES.INCREMENT5,payload:5})

    return(
        <div className="block">
            <h2 className="title is-2">Contador con useReducer</h2>
            <p className="title is-6">El valor actual del contador es {state.contador}</p>
            <div className="block">
                <button className="button is-primary" onClick={restar5}>Decrementar en 5</button>
                <button className="button is-primary" onClick={restar}> Decrementar</button>
                <button className="button is-primary" onClick={iniciar}>Inicializar</button>
                <button className="button is-primary" onClick={sumar}>Incrementar</button>
                <button className="button is-primary" onClick={sumar5}>Incrementar en 5</button>
            </div>
        </div>
    );
}