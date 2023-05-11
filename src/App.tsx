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

  const handleCreate = (name: string) => {
    setAssignments([
      ...assignments, 
      {
        id: assignments.length+1, 
        name: name, 
        completed: false
      }
    ]);

    setAssignmentInput("");
  }

  const handleComplete = (id: number) => {
    setAssignments (
      assignments.map(assignment => {
        if (assignment.id === id) {
          return {...assignment, completed: !assignment.completed}
        }
        else {
          return assignment
        }
    }))
  }

  const getCompleted = () => {
    return assignments.filter(value => value.completed).length
  }

  return (
    <>
      <Header 
        assignmentInput={assignmentInput}
        setAssignmentInput={setAssignmentInput}
        handleCreate={handleCreate}
        />
      <Assignments 
        assignments={assignments} 
        handleComplete={handleComplete} 
        completeCount={getCompleted} />
    </>
  );
}

export default App;
