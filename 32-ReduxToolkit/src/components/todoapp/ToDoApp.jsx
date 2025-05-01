import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import "./ToDoApp.css";

import {
  addTodo,
  deleteTodo,
  updateTodo,
  deleteAllTodos,
} from "../../features/toDoList/toDoListSlice";

const ToDoApp = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState("");

  const [edit, setEdit] = useState(null);
  const [editedId, setEditedId] = useState(null);

  return (
    <div>
      <div className="todo-container">
        <h1>to do app</h1>

        {edit ? (
          <>
            <input
              type="text"
              placeholder="edit todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch(updateTodo({ id: editedId, newText: todo }));
                setEdit(false);
                setTodo("");
                setEditedId(null);
              }}
            >
              edit todo
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="write todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch(addTodo(todo));
                setTodo("");
              }}
            >
              add todo
            </button>
          </>
        )}

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <MdDelete
                size={25}
                onClick={() => dispatch(deleteTodo(todo.id))}
              />
              <MdModeEdit
                size={25}
                onClick={() => {
                  setEdit(true);
                  setTodo(todo.text);
                  setEditedId(todo.id);
                }}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            dispatch(deleteAllTodos(todo));
            setTodo("");
          }}
        >
          delete all todos
        </button>
      </div>
    </div>
  );
};

export default ToDoApp;
