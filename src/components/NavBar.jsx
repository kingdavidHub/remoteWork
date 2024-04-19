import logo from "../images/logo.svg";
import cheveronDown from "../images/icon-arrow-down.svg";
import cheveronUp from "../images/icon-arrow-up.svg";
import menuOpen from "../images/icon-menu.svg";
import menuClose from "../images/icon-close-menu.svg";
import { useState } from "react";
import todolist from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import remiders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  return (
    <header className="p-5 flex justify-between items-center">
      <div className="lg:flex lg:items-start lg:justify-start">
        <img src={logo} alt="" className="lg:mr-5" />
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
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
          <div>
            <button
              className="flex items-center justify-start"
              onClick={() => setOpenCompany(!openCompany)}
            >
              Company{" "}
              <img
                src={`${openCompany ? cheveronUp : cheveronDown}`}
                className="ml-2"
                alt=""
              />
            </button>
            {openCompany && (
              <>
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="mb-2 lg:mb-0">
            <button>Careers</button>
          </div>
          <div>
            <button>About</button>
          </div>
        </nav>
      </div>

      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? menuClose : menuOpen} alt="" />
        </button>
      </div>

      <div className="hidden lg:block">
        <button className="mr-10 opacity-75">Login</button>
        <button className="border-2 border-black opacity-75  px-6 py-2 rounded-2xl">
          Register
        </button>
      </div>
    </header>
  );
};

export default NavBar;
