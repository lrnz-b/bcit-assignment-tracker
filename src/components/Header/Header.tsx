import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface HeaderProps {
  newAssignmentInput: string;
  setNewAssignmentInput: Function;
  setCreatedAssignments: Function;
}

const Header = ({ 
  newAssignmentInput, 
  setNewAssignmentInput,
  setCreatedAssignments }: HeaderProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAssignmentInput(event.currentTarget.value);
  }

  const handleClick = () => {
    setCreatedAssignments([...newAssignmentInput])
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={handleChange} />
        <button disabled={!newAssignmentInput} onClick={handleClick}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

export default Header;
