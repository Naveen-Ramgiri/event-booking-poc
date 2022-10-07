import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Calendar/ReactCalendar.css";

function ReactCalendar() {
  const [value, onChange, month] = useState(new Date());
  console.log(value, "valuecheck");
  return (
    <div className="react-calendar_container">
      <Calendar onChange={onChange} value={value} defaultView={"year"} />
    </div>
  );
}
export default ReactCalendar;
