import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
}

export const toDoListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(), 
        text: action.payload
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },    
    deleteTodo:(state, action) => {
      let indexTodo = state.todos.findIndex((todo) => todo.id === action.payload);
      if (indexTodo !== -1) {
        state.todos.splice(indexTodo, 1);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const indexTodo = state.todos.findIndex((todo) => todo.id === id);
       if(indexTodo !== -1) {
        state.todos[indexTodo].text = newText;
        localStorage.setItem("todos", JSON.stringify(state.todos));
       }
    }   ,
    deleteAllTodos:(state) => {
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    } 
  },
})

export const { addTodo, deleteTodo, updateTodo, deleteAllTodos } = toDoListSlice.actions;

export default toDoListSlice.reducer