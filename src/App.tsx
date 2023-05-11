import Header from "./components/Header/Header";
import Assignments from "./components/Assignments/Assignments";
import { useState } from "react"

const App = () => {
  const [newAssignmentInput, setNewAssignmentInput] = useState<string>("");
  const [createdAssignments, setCreatedAssignments] = useState<string[]>([])

  return (
    <>
      <Header 
        newAssignmentInput={newAssignmentInput}
        setNewAssignmentInput={setNewAssignmentInput}
        setCreatedAssignments={setCreatedAssignments}
        />
      <Assignments createdAssignments={createdAssignments} />
    </>
  );
}

export default App;
