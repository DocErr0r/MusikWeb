import { createContext, useContext, useReducer } from "react";

export const myContext = createContext();

export const Stateprovider = ({ children, intialState, reducer }) => (
    <myContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </myContext.Provider>
);

export const useStateProvider = () => useContext(myContext);
