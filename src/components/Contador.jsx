import { useReducer, useState } from "react";

const intialState = {contador: 0};

const TYPES = {
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
    INCREMENT5:"INCREMENT5",
    DECREMENT5:"DECREMENT5",
    RESTART:"RESTART"
}

function reducer(state,action){
    switch(action.type){
        case TYPES.INCREMENT:
           return({contador: state.contador + 1});
        case TYPES.DECREMENT:
            return({contador: state.contador - 1});
        case TYPES.DECREMENT5:
            return({contador: state.contador + 5});
        case TYPES.INCREMENT5:
            return({contador: state.contador - 5});
        case TYPES.RESTART:
            return(intialState);
        default:
            return state;
    }
}

export default function Contador(){

    const [state, dispatch] = useReducer(reducer,intialState)
}