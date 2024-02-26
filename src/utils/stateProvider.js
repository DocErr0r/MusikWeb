import { createContext, useContext, useReducer } from "react";

export const myContext = createContext();

export const Stateprovider = ({ children, intialState, reducer }) => (
    <myContext.Provider value={useReducer(intialState, reducer)}>
        {children}
    </myContext.Provider>
);

export const useStateProvider = () => useContext(myContext);
