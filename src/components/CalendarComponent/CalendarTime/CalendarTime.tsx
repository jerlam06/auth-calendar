import Highlight from "../../Highlight/Highlight";
import "./CalendarTime.scss";

interface CalendarTimeProps {
  hours: string[];
  value: string;
  onChange: (val: string) => void;
}

export default function CalendarTime({ hours, value, onChange }: CalendarTimeProps) {
  return (
    <div className="CalendarTime">
      <div className="CalendarTime__value">
        <span>Time</span>
        <Highlight>{value}</Highlight>
      </div>
      <ul>
        {hours.map((h) => (
          <li
            onClick={() => onChange(h)}
            className={"CalendarTime__hour" + (value === h ? " CalendarTime__hour--selected" : "")}
          >
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
