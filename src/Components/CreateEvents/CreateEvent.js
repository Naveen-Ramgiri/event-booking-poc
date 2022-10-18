import React from "react";
import "../CreateEvents/CreateEvent.css";
import { Link } from "react-router-dom";
import ReactCalendar from "../Calendar/ReactCalendar";

function CreateEvent() {
  return (
    <div className="create__event">
      <div className="container">
        <div className="create__event-steps">
          <div>
            <h4>What type of event is it?</h4>
            <p>
              Already have an account? <Link to="/Login">LOG IN </Link>or LOOK
              UP EVENT »
            </p>
            <ul>
              <li>
                <Link to="/EventType">
                  <h5>Wedding Party</h5>
                  <i class="fa fa-life-ring" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="/ReactCalendar">
                  <h5>HomeComing/Fall formal</h5>
                  <i class="fas fa-crown"></i>
                </Link>
              </li>
              <li>
                <Link to="/MardiGras">
                  <h5>FOrmal Event - Single Rental</h5>
                  <i class="fa fa-user-o"></i>
                </Link>
              </li>
              <li>
                <Link to="/MardiGras">
                  <h5>MARDI GRAS</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
