import React from "react";
import { Link } from "react-router-dom";
import ReactCalendar from "../Calendar/ReactCalendar";

function EventType() {
  return (
    <div className="create__event">
      <div className="container">
        <div className="create__event-steps">
          <div>
            <h4>Is it your wedding?</h4>
            <p>
              If so, we'll make it easy for you to manage and track any party
              members.
            </p>
            <ul>
              <li>
                <Link to="/ReactCalendar">
                  <h5>YES,IT'S MY WEDDING</h5>
                </Link>
              </li>
              <li>
                <Link to="/ReactCalendar">
                  <h5>NO,I'M IN THE PARTY</h5>
                </Link>
              </li>
              <li>
                <Link to="/ReactCalendar">
                  <h5>NO,I'M AT TENDING AS A GUEST</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventType;
