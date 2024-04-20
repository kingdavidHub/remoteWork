import { useState } from "react";
import logo from "../images/logo.svg";
import menuOpen from "../images/icon-menu.svg";
import menuClose from "../images/icon-close-menu.svg";
import Features from "./Features";
import Company from "./Company";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-5 flex justify-between items-center">
      <div className="lg:flex lg:items-start lg:justify-start">
        <img src={logo} alt="" className="lg:mr-5" />
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <Features />
          <Company />
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
