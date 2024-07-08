import TYPES from '../actions/contadorActions.js';

export const contadorIntialState = {contador: 0};

export function contadorReducer(state,action){
    switch(action.type){
        case TYPES.INCREMENT:
           return({contador: state.contador + 1});
        case TYPES.DECREMENT:
            return({contador: state.contador - 1});
        case TYPES.DECREMENT5:
            return({contador: state.contador - action.payload});
        case TYPES.INCREMENT5:
            return({contador: state.contador + action.payload});
        case TYPES.RESTART:
            return(contadorIntialState);
        default:
            return state;
    }
}