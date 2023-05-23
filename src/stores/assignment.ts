import { create } from 'zustand';

interface Assignment {
  id: number;
  name: string;
  completed: boolean;
  deadline: Date | undefined;
}

interface AssignmentsState {
	assignmentInput: string;
	showCalendar: boolean;
	deadline: Date | undefined;
	assignments: Assignment[];
	setAssignmentInput: (input: string) => void;
	toggleCalendar: () => void;
	setDeadline: (date: Date | undefined) => void;
	addAssignment: () => void;
	completeAssignment: (id: number) => void;
	removeAssignment: (id: number) => void;
}

const useAssignmentStore = create<AssignmentsState>()((set) => ({
	assignmentInput: "",
	showCalendar: false,
	deadline: new Date(),
	assignments: [],
	setAssignmentInput: (input) => {
		set(() => ({ 
			assignmentInput: input 
		}))
	},
	toggleCalendar: () => {
		set((state) => ({ 
			showCalendar: !state.showCalendar 
		}))
	},
	setDeadline: (date) => {
		set(() => ({ 
			deadline: date 
		}))
	},
	addAssignment: () => {
		set((state) => ({ 
			assignments: [
				...state.assignments, 
				{
					id: Date.now(), 
					name: state.assignmentInput, 
					completed: false, 
					deadline: state.deadline
				}
			]
		}));
	},
	completeAssignment: (id) => {
		set((state) => ({ 
			assignments: state.assignments.map((assignment) => {
				if(assignment.id === id) {
					return {
						...assignment,
						completed: !assignment.completed
					};
				}
				else {
					return assignment;
				}
			})
		}));
	},
	removeAssignment: (id) => {
		set((state) => ({
			assignments: state.assignments.filter((assignment) => {
				return assignment.id !== id
			})
		}));
	}
}));

export { useAssignmentStore };
