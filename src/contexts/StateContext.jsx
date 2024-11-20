import { createContext, useEffect, useReducer } from "react";

export const StateContext = createContext ()

export const stateReducer = (state, action) => {
    switch (action.type) {
        case 'DROPDOWN':
            return {...state, showDropdown: action.payload}
        case 'GROUPING':
            return {...state, grouping: action.payload}
        case 'ORDERING':
            return {...state, ordering: action.payload}
        default:
            return state
    }
}

export const StateContextProvider = ({ children }) => {
    const initialState = {
        showDropdown: false,
        grouping: "Status",
        ordering: "Priority",
    };

    // Retrieve saved state from localStorage
    const init = () => {
        const savedState = localStorage.getItem("state");
        return savedState ? JSON.parse(savedState) : initialState;
    };

    const [state, stateDispatch] = useReducer(stateReducer, {}, init);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state));
    }, [state]);

    return (
        <StateContext.Provider value={{...state, stateDispatch}}>
            { children }
        </StateContext.Provider>
    )
}