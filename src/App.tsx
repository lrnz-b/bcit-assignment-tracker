import Header from "./components/Header/Header";
import Assignments from "./components/Assignments/Assignments";
import { useState } from "react"

interface AssignmentProperties {
  id: number;
  name: string;
  completed: boolean;
}

const App = () => {
  const [assignmentInput, setAssignmentInput] = useState<string>("");
  const [assignments, setAssignments] = useState<AssignmentProperties[]>([]);

  return (
    <>
      <Header 
        assignmentInput={assignmentInput}
        setAssignmentInput={setAssignmentInput}
        assignments={assignments}
        setAssignments={setAssignments}
        />
      <Assignments 
        assignments={assignments}
        setAssignments={setAssignments} 
        />
    </>
  );
}

export default App;
