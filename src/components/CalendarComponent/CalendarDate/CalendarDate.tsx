import Calendar from "moedim";
import { formatDate } from "../../../shared/utils";
import Highlight from "../../Highlight/Highlight";
import "./CalendarDate.scss";

interface CalendarDateProps {
  value: Date;
  onChange: (val: Date) => void;
}

export default function CalendarDate({ value, onChange }: CalendarDateProps) {
  return (
    <div className="CalendarDate">
      <div className="CalendarDate__value">
        <span>Date</span>
        <Highlight>{formatDate(value)}</Highlight>
      </div>
      <Calendar value={value} onChange={onChange} />
    </div>
  );
}
