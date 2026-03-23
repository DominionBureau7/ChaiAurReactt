import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        //addTodo: (state, action) => {},
        addTodo: () => {
            const todo = {
                id: nanoid,// earlier we used Date.now
                text: "Hello world"
            }
        },
        
        removeTodo: () => {},
    }
})