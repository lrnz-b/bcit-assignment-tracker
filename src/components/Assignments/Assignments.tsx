import Assignment from "../Assignment/Assignment";
import styles from "./assignments.module.css";

interface AssignmentProperties {
  id: number;
  name: string;
  completed: boolean;
}

interface AssignmentsProps {
  assignments: AssignmentProperties[];
  handleComplete: Function;
  completeCount: Function; 
}

const Assignments = ({ assignments, handleComplete, completeCount }: AssignmentsProps) => {

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completeCount()} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment 
            assignment={assignment} 
            key={assignment.id} 
            handleComplete={handleComplete}
            />
        ))}
      </div>
    </section>
  );
}

export default Assignments;
