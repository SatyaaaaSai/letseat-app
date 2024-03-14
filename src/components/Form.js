import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../css/Form.css";
const Form = () => {
  const [type, setType] = useState("signIn");
  const handleClick = (text) => {
    if (type != text) {
      setType(text);
      return;
    }
  };

  const containerClass =
  "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignIn />
        <SignUp />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Get the most out of your foodie journey – log in for tailored
                suggestions and easy ordering.
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hey There, Hungry Pal!</h1>
              <p>
                Pop in your information and let's embark on a gastronomic
                journey together!
              </p>
              <button className="ghost" id="signUp" onClick={()=>handleClick("signUp")}>SignUp </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
