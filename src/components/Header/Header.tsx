
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface HeaderProps {
  assignmentInput: string;
  setAssignmentInput: Function;
  handleCreate: Function;
}

const Header = ({ assignmentInput, setAssignmentInput, handleCreate }: HeaderProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssignmentInput(event.currentTarget.value);
  }

  const onCreate = () => {
    handleCreate(assignmentInput)
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={onChange} value={assignmentInput}/>
        <button disabled={!assignmentInput} onClick={onCreate}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

export default Header;
