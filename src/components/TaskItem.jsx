import styles from "../GlobalStyles.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import Button from "./Button";

const TaskItem = ({ taskId, taskText, onDelete, onEdit }) => {
  return (
    <div className={styles.divContainerItem}>
      <div className={styles.todoItem}>
        <p>{taskText}</p>
      </div>
      <div className={styles.todoAction}>
        <Button
          className={styles.actionButton}
          handleClick={() => {
            onDelete(taskId);
          }}
        >
          <MdDelete size={"2em"} />
        </Button>

        <Button
          className={styles.actionButton}
          handleClick={() => {
            onEdit(taskId);
          }}
        >
          <MdEdit size={"2em"} />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
