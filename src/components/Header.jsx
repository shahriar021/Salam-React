import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  const onlineCheck = useOnlineStatus();
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="image logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>Online status : {onlineCheck ? "👍" : "🔴"}</li>

          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <a href="/contact">contact</a>
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
