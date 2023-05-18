import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import '../../../node_modules/react-day-picker/dist/style.css'
import style from './calendar.module.css'

const Calendar = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      styles={{
        month: {
          background: 'white',
          color: 'black',
          boxShadow: '1px 1px 10px 1px',
          borderRadius: '10px'
        }
      }}
      modifiersClassNames={{
        selected: style.selected,
        today: style.today
      }}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
}

export default Calendar;