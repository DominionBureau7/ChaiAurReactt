//We create TodoContext.js first because it is the central storage for todos that all components will use.
// JS and not JSX because here we'll have logic only and no UI.
import {createContext, useContext} from "react" // =createContext → creates the box, useContext → reads data from the box

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }//This is sample default data. Names can be any.
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
//The Provider shares the data with all components.