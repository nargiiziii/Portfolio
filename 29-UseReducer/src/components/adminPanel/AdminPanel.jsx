import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import style from "./AdminPanel.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      const updatedUsers = [...state, action.person];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;

    case "DELETE_USER":
      const filteredUsers = state.filter((person) => person.id !== action.id);
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      return filteredUsers;

    case "UPDATE_USER":
      const updated = state.map((user) => {
        if (user.id === action.person.id) {
          return action.person;
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(updated));
      return updated;

    case "RESET_USERS":
      localStorage.removeItem("users");
      return [];

    default:
      return state;
  }
};

const AdminPanel = () => {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [editId, setEditId] = useState(null);

  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const [state, dispatch] = useReducer(reducer, savedUsers);

  const createOrUpdateUser = (e) => {
    e.preventDefault();

    if (userName && userSurname) {
      if (editId) {
        dispatch({
          type: "UPDATE_USER",
          person: {
            id: editId,
            name: userName,
            surname: userSurname,
          },
        });
        setEditId(null);
      } else {
        dispatch({
          type: "CREATE_USER",
          person: {
            id: uuid(),
            name: userName,
            surname: userSurname,
          },
        });
      }

      setUserName("");
      setUserSurname("");
    }
  };

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", id: id });
  };

  const editUser = (user) => {
    setUserName(user.name);
    setUserSurname(user.surname);
    setEditId(user.id);
  };

  const resetUsers = () => {
    dispatch({ type: "RESET_USERS" });
  };

  return (
    <div className={style.panel_area}>
      <input
        type="text"
        value={userName}
        placeholder="Name"
        onChange={(e) => setUserName(e.target.value)}
        className={style.input}
      />

      <input
        type="text"
        value={userSurname}
        placeholder="Surname"
        onChange={(e) => setUserSurname(e.target.value)}
        className={style.input}
      />

      <button onClick={createOrUpdateUser} className={style.button}>
        {editId ? "update user" : "create user"}
      </button>

      <ul className={style.userList}>
        {state.map((userItem) => (
          <li key={userItem.id} className={style.userItem}>
            <span className={style.userText}>
              {userItem.name} - {userItem.surname}
            </span>
            <div className={style.actionButtons}>
              <button
                onClick={() => deleteUser(userItem.id)}
                className={`${style.button}`}
              >
                delete
              </button>
              <button
                onClick={() => editUser(userItem)}
                className={`${style.button}`}
              >
                edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={resetUsers}
        className={`${style.button}`}
      >
        reset
      </button>
    </div>
  );
};

export default AdminPanel;
