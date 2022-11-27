import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import Card from "../../components/Card/Card";

export default function Calendar() {
  return (
    <Card title="Calendar">
      <div className="Calendar__values"></div>
      <CalendarComponent />
    </Card>
  );
}
