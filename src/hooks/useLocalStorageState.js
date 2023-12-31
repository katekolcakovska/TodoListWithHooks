import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
    //make piece of state based off of value in localstorage (or default)
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            val = defaultVal;
        }
        return val;
    });

    // use useEffect to update localStorage when that piece of state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, setState];
}

export default useLocalStorageState;

// const[todos, setTodos] = useLocalStorageState("todos", []);
// useState()