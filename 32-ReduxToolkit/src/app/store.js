import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../features/toDoList/toDoListSlice'

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
})