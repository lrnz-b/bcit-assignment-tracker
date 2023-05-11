import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

interface AssignmentProps {
  name: string;
}

const Assignment = ({ name }: AssignmentProps) => {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{name}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

export default Assignment;
