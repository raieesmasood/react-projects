import React from "react";
import "./LoginSignUp.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignUp = () => {
  return (
    <div class="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} />
          <input type="text" />
        </div>
        <div className="input">
          <img src={email_icon} />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} />
          <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Log In</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
