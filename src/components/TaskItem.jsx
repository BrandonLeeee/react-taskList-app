import styles from "./GlobalStyles.module.css";
import Button from "./Button";

const TaskItem = ({ taskId, taskText, handleDelete }) => {
  return (
    <div className={styles.divContainer}>
      <li className={styles.todoItem}>{taskText}</li>
      <Button
        className={styles.deleteButton}
        buttonText={"Delete"}
        handleClick={() => {
          handleDelete(taskId);
        }}
      />
    </div>
  );
};

export default TaskItem;
