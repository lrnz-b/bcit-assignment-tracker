import { useAssignmentStore } from '../../stores/assignment';
import { DayPicker } from 'react-day-picker';
import '../../../node_modules/react-day-picker/dist/style.css';
import style from './calendar.module.css';

const Calendar = () => {
  const { deadline, setDeadline, toggleCalendar } = useAssignmentStore();

  const handleDaySelect = (day: Date | undefined) => {
    setDeadline(day);
  }

  return (
    <DayPicker
    mode="single"
      selected={deadline}
      onSelect={handleDaySelect}
      disabled={{before: new Date()}}
      onDayClick={() => toggleCalendar()}
      modifiersClassNames={{
        selected: style.selected
      }}
      styles={{
        month: {
          background: 'white',
          color: 'black',
          boxShadow: '1px 1px 10px 1px',
          borderRadius: '10px'
        }
      }}
    />
  );
}

export default Calendar;