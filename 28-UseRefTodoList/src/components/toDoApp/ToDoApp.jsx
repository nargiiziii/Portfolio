import React, { useEffect, useState, useRef } from "react";
import style from "./ToDoApp.module.css";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

const toDoApp = () => {
  let inputRef = useRef(null);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //edit yeri ucun
  const [edit, setEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  let addTask = (e) => {
    e.preventDefault();
    let taskText = inputRef.current.value.trim();

    if (!taskText.trim()) {
      toast("please,enter task!");
      return;
    }

    if (
      tasks.some((task) => task.task.toLowerCase() === taskText.toLowerCase())
    ) {
      toast("this task already exists!!!");
      return;
    }

    let newTask = {
      id: uuidv4(),
      task: taskText,
      listNum: tasks.length + 1,
    };
    setTasks([...tasks, newTask]);
    toast("added new task!!");
    inputRef.current.value = "";
  };

  let deleteTask = (id) => {
    let findTaskIndex = tasks.findIndex((task) => task.id == id);
    tasks.splice(findTaskIndex, 1);
    setTasks([...tasks]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    toast("task removed!!");
  };

  let editTask = (taskItem) => {
    setEdit(true);
    setCurrentTask(taskItem);
    inputRef.current.value = taskItem.task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  let updateTask = (e) => {
    e.preventDefault();
    let updatedText = inputRef.current.value;

    if (!updatedText.trim()) return;

    let updatedTasks = tasks.map((task) =>
      task.id === currentTask.id ? { ...task, task: updatedText } : task
    );

    setTasks(updatedTasks);
    setEdit(false);
    setCurrentTask(null);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    inputRef.current.value = "";
    toast("task edited!!");
  };

  let taskStatus = (id) => {
    let updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  let deleteAllTasks = () => {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    toast("removed all tasks!!");
  };

  useEffect(() => {
    const tasksWithNum = tasks.map((task, index) => ({
      ...task,
      listNum: index + 1,
    }));
    setTasks(tasksWithNum);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks.length]);

  return (
    <div className={style.to_do_app}>
      <ToastContainer />
      {edit ? (
        <div className={style.edit_task}>
          <form>
            <input
              ref={inputRef}
              type="text"
              placeholder="edit your task.."
              id="input"
            />
            <button onClick={updateTask}>update task</button>
          </form>
        </div>
      ) : (
        <div className={style.add_task}>
          <form>
            <input
              ref={inputRef}
              type="text"
              placeholder="enter your task.."
              id="input"
            />
            <button id="add" className="add_btn" onClick={addTask}>
              add task
            </button>
          </form>
        </div>
      )}
      <div className="task_list">
        <ul className="list">
          {tasks &&
            tasks.map((item) => (
              <li
                key={item.id}
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                  color: item.isCompleted ? "green" : "red",
                }}
              >
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => taskStatus(item.id)}
                />
                {item.listNum}. {item.task}
                <div className="settings">
                  <button
                    onClick={() =>
                      item.isCompleted
                        ? deleteTask(item.id)
                        : alert("you cannot delete uncompleted task!!")
                    }
                  >
                    delete
                  </button>

                  <button onClick={() => editTask(item)}>edit</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <button onClick={() => deleteAllTasks()}>delete all tasks</button>
      <ToastContainer
        autoClose={1200}
        hideProgressBar
        toastClassName={style.my_toast}
      />
    </div>
  );
};

export default toDoApp;
