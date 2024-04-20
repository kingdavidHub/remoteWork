import { useState } from "react";
import cheveronDown from "../images/icon-arrow-down.svg";
import cheveronUp from "../images/icon-arrow-up.svg";

const Company = () => {
  const [openCompany, setOpenCompany] = useState(false);
  return (
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
  );
};

export default Company;
