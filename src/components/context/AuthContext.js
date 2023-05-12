import {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    user: null,
    /* user:{
        _id: "63fa664f11186ce44f902386",
        username:"tnjensen",
        email: "tnjensen@online.no",
        city: "Trondheim",
        from: "Asker",
        relationship:2,
    }, */
    isFetching: false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={
            {user:state.user, 
            isFetching:state.isFetching,
             error: state.error,
             dispatch,
             }}>
                {children}
            </AuthContext.Provider>
    )
}