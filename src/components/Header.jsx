import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import ecom from "../asset/ecom.png";
import useOnlineStatus from "../hooks/useOnlineStatus";


const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  // custom hook
  const onlineCheck = useOnlineStatus();
  return (
    <div className="flex justify-between bg-slate-400 shadow-lg  w-full">
      <Link to="/about">
        <div className="m-2 p-2 rounded-xl  hover:bg-red-500">
          <img
            className="w-10 rounded-lg hover:bg-red-500"
            src={ecom}
            alt="image logo"
          />
        </div>
      </Link>

      <div className="nav-item">
        <ul className="flex p-4 m-4 items-center justify-between">
          <li className="px-5">Online status : {onlineCheck ? "👍" : "🔴"}</li>

          <li className="px-5">
            <Link to="/">home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">about</Link>
          </li>
          <li className="px-5">
            <a href="/contact">contact</a>
          </li>
          <li className="px-5">
            <a href="/gadget">gadget</a>
          </li>
          <button
            onClick={() => {
              authButton === "Login"
                ? setAuthButton("Logout")
                : setAuthButton("Login");
            }}
          >
            {authButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
