import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface HeaderProps {
  newAssignmentInput: string;
  setNewAssignmentInput: Function;
  createdAssignments: string[];
  setCreatedAssignments: Function;
}

const Header = ({ 
  newAssignmentInput, 
  setNewAssignmentInput,
  createdAssignments,
  setCreatedAssignments }: HeaderProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAssignmentInput(event.currentTarget.value);
  }

  const handleClick = () => {
    setCreatedAssignments([...createdAssignments, newAssignmentInput]);
    setNewAssignmentInput("");
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={handleChange} value={newAssignmentInput}/>
        <button disabled={!newAssignmentInput} onClick={handleClick}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

export default Header;
