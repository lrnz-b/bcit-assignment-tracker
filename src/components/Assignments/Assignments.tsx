import { useAssignmentStore } from "../../stores/assignment";
import Assignment from "../../components/Assignment/Assignment.tsx";
import styles from "./assignments.module.css";

const Assignments = () => {
  const { assignments } = useAssignmentStore();

  const getCompleted = () => {
    return assignments.filter(value => value.completed).length;
  }

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{getCompleted()} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment id={assignment.id} key={assignment.id} />
        ))}
      </div>
    </section>
  );
}

export default Assignments;
