import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs"

interface AssignmentProperties {
  id: number;
  name: string;
  completed: boolean;
}

interface AssignmentProps {
  assignment: AssignmentProperties;
  handleComplete: Function;
}

const Assignment = ({ assignment, handleComplete }: AssignmentProps) => {
  const onComplete = () => {
    handleComplete(assignment.id);
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onComplete}>
        {
          assignment.completed 
          ? 
              <BsCheckCircleFill />
           
          : <div />
        }
      </button>

      <p className={assignment.completed ? styles.textCompleted : ""} >{assignment.name}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

export default Assignment;
