import React from "react";
import useToggle from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemSecondaryAction } from "@mui/material";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle(false)
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} /> :
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default Todo;