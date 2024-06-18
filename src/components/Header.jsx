import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="image logo" />
      </div>
      <div className="nav-item">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
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
