import { v4 as uuidv4 } from 'uuid';
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), task: action.task, completed: false }];
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
            );
        default:
            return state;
    }
};
export default reducer;


// {type: "ADD", task: "Walk The Dog"}
// {type: "REMOVE", id: 123456}
// {type : "TOGGLE", id 1223342}
// {type: "EDIT", id: 1276847, newTask "Walk Cat"}

//  addTodo: newTodoText => {
//             setTodos([...todos, { id: uuidv4(), task: action.task, completed: false }]);
//         },
//         removeTodo: todoId => {
//             //filter out removed todo
//             const updatedTodos = todos.filter(todo => todo.id !== todoId);
//             //call setTodos with new todos array
//             setTodos(updatedTodos);
//         },
//         toggleTodo: todoId => {
//             const updatedTodos = todos.map(todo =>
//                 todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//             );
//             setTodos(updatedTodos);
//         },
//         editTodo: (todoId, newTask) => {
//             const updatedTodos = todos.map(todo =>
//                 todo.id === todoId ? { ...todo, task: newTask } : todo
//             );
//             setTodos(updatedTodos);
//         }