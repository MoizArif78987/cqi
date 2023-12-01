import React from "react";
import "./authorization.css";
import uetLogo from "../images/uet-lahore-logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Authorization() {
  return (
    <>
      <div className="authPage">
        <div className="LoginContainer">
          <div className="cardheader">
            <img src={uetLogo} alt="Loading..." />
            <h1>CQI</h1>
          </div>
          <div className="loginCard">
            <div className="innercardheader">
              <h2>Sign In</h2>
            </div>

            <form action="">
              <div className="ipt">
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="ipt">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="btnDiv">
                <Link to='/adminpanel' className='linkbtnDiv'><button>Sign In</button></Link>
              </div>
              <div className="forgotPassword">
                <p>forgot password?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
