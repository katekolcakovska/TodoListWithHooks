import React, { useContext } from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import Todo from './Todo';
import { TodosContext } from "./contexts/todos.context";

function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <React.Fragment key={todo.id} >
                            <Todo
                                {...todo}
                                // id={todo.id}
                                // task={todo.task}
                                // completed={todo.completed} {...todo mesto site ovie posebno}
                                key={todo.id}
                            // removeTodo={removeTodo}
                            // toggleTodo={toggleTodo}
                            // editTodo={editTodo} ovie ne treba vekje da gi passnuvame so context
                            />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}
export default TodoList;