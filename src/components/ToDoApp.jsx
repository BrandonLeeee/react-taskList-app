import { useState } from "react";
import styles from "./GlobalStyles.module.css";
import Button from "./Button";
import ToastNotification, { showToast } from "./ToastNotification";
import TaskItem from "./TaskItem.jsx";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      showToast("warn", "Task cannot be empty!");
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        text: inputValue,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);

      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    showToast("info", "Task deleted!");
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Task List</h1>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          maxLength={67} // Limit 2 rows
          className={styles.inputField}
          type="text"
          placeholder="e.g. Study English "
          value={inputValue}
          onChange={handleChange}
        />
        <Button className={styles.addButton} buttonText={"Add Task"} />
      </form>

      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks.</p>
      ) : (
        <ul className={styles.todoList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              taskId={task.id}
              taskText={task.text}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}

      <ToastNotification />
    </div>
  );
};

export default ToDoApp;
