import { createContext, useReducer, useContext } from "react";

const AuthContext = createContext(
    {
        state: null,
        actions: null
    }
);

const ACTIONS = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

function reducer(state,action){
    switch(action.type){
        case ACTIONS.LOGIN:
            return {
                ...state,
                isAuthenticated:true
            }
        case ACTIONS.LOGOUT:
            return {
                ...state,
                isAuthenticated:false
            }
        default:
            state;
    }
}

function AuthProvider({children}){
    const [state, dispatch] = useReducer(reducer,{
        isAuthenticated: false
    });

    const actions = {
        login: () => dispatch({ type: ACTIONS.LOGIN }),
        logout: () => dispatch({ type: ACTIONS.LOGOUT }),
    };
    console.log(state);
    return(
        <AuthContext.Provider value={{state,actions}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(type){
    const context = useContext(AuthContext);
    if (context === undefined){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    console.log(context[type]);
    return context[type];
}

export {AuthProvider, useAuth, AuthContext};