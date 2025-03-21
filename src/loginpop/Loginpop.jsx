import { assets } from "../assets/assets";
import "./Loginpop.css";
import React, { useState } from "react";

function Loginpop({ setlogin }) {
  const [currState, setCurrentState] = useState("Log In");

  return (
    <div className="loginpop">
      <div className="loginpop-container">
        <div className="loginpop-container-title">
          <h1>{currState}</h1>
          <img
            onClick={() => {
              setlogin(false);
            }}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="loginpop-container-text">
          {currState === "Log In" ? (
            <> </>
          ) : (
            <input type="text" placeholder="User Name" />
          )}
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>{currState === "Sign Up" ? "Create Acount " : "Log In"}</button>
        <div className="loginpop-condition">
          <input type="checkbox" required />
          <p>by continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        <div className="check">
        {currState === "Log In" ? (
          <p>
            create new account ?
            <span onClick={()=>setCurrentState("Sign Up")}>click her</span>
          </p>
        ) : (
          <p>
            aredy have account ?
            <span onClick={()=>setCurrentState("Log In")}>Log In </span>
          </p>
        )}
          
        </div>
   
      </div>
    </div>
  );
}

export default Loginpop;
