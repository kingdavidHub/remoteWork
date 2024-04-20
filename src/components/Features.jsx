import { useState } from "react";
import cheveronDown from "../images/icon-arrow-down.svg";
import cheveronUp from "../images/icon-arrow-up.svg";

import todolist from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import remiders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

const Features = () => {
  const [openFeatures, setOpenFeatures] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-start"
        onClick={() => setOpenFeatures(!openFeatures)}
      >
        Features{" "}
        <img
          src={`${openFeatures ? cheveronUp : cheveronDown}`}
          className="ml-2"
          alt=""
        />
      </button>
      {openFeatures && (
        <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
          <li className="flex items-center justify-start text-sm mb-2">
            <img src={todolist} alt="" className="mr-2" />
            Todo List
          </li>
          <li className="flex items-center justify-start text-sm mb-2">
            <img src={calendar} alt="" className="mr-2" />
            Calendar
          </li>
          <li className="flex items-center justify-start text-sm mb-2">
            <img src={remiders} alt="" className="mr-2" />
            Reminders
          </li>
          <li className="flex items-center justify-start text-sm mb-2">
            <img src={planning} alt="" className="mr-2" />
            Planning
          </li>
        </ul>
      )}
    </div>
  );
};

export default Features;
