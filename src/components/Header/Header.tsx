import { useAssignmentStore } from '../../stores/assignment';
import Calendar from '../../components/Calendar/Calendar';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoCalendar } from 'react-icons/io5';

const Header = () => {
  const { 
    showCalendar,
    toggleCalendar,
    assignmentInput,
    setAssignmentInput,
    addAssignment,
    deadline,
    setDeadline
  } = useAssignmentStore();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssignmentInput(event.currentTarget.value);
  }

  const handleCreate = () => {
    addAssignment();
    setAssignmentInput("");
    setDeadline(new Date());
    if (showCalendar) {
      toggleCalendar();
    }
  }

  const handleShowCalendar = (event: any) => {
    event.preventDefault();
    toggleCalendar();
  }

  const disableCreate = !assignmentInput || !deadline;

  return (
    <header className={styles.header}>
      <h1>Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={handleInputChange} value={assignmentInput}/>
        <button className={styles.icon} onClick={handleShowCalendar}>
          <IoCalendar size={30} />
        </button>
        <div className={showCalendar ? styles.table : styles.hidden}>
          <Calendar />
        </div>
        <button 
          className={styles.create} 
          onClick={handleCreate}
          disabled={disableCreate}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

export default Header;
