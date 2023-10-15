import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer.js";
// import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    { id: 1, task: "Mow the lawn", completed: false },
    { id: 2, task: "Realease lady bugs into the garden", completed: true }
];

export const TodosContext = createContext();

export const DispatchContext = createContext();

export function TodosProvider(props) {
    // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    //     defaultTodos
    // );
    const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}