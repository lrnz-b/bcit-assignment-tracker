import Assignment from "../Assignment/Assignment";
import styles from "./assignments.module.css";

interface AssignmentsProps {
  createdAssignments: string[];
}

const Assignments = ({ createdAssignments }: AssignmentsProps) => {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
        {createdAssignments.map((item, idx) => (
          <Assignment name={item} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Assignments;
