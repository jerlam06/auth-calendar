import "./CalendarComponent.scss";
import { useState } from "react";
import { generateHours } from "../../shared/utils";
import CalendarTime from "./CalendarTime/CalendarTime";
import CalendarDate from "./CalendarDate/CalendarDate";

const hours = generateHours();

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(hours[0]);

  const handleOnSave = () => {
    // Do something
  };

  return (
    <div className="CalendarComponent">
      <h3>Schedule Response</h3>
      <div className="CalendarComponent__wrapper">
        <CalendarDate value={date} onChange={setDate} />
        <CalendarTime hours={hours} value={hour} onChange={setHour} />
      </div>
      <div className="CalendarComponent__buttons">
        <button onClick={handleOnSave} className="CalendarComponent__button--action">
          Schedule
        </button>
        <button className="CalendarComponent__button--cancel">Cancel</button>
      </div>
    </div>
  );
}
