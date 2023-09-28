import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Signup() {
  const [login,setLogin]= useState(
    {
      username:"",
      password:""
    }
  );

  const onLoginClick = ()=>{
    console.log('Login')
  }
  const [selectedOption, setSelectedOption] = useState("Student");
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [selectedOption2, setSelectedOption2] = useState("Computer Science");
  const handleRadioChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const [signup, setSignup] = useState(0);
  const handleEmailInputforLogin = (event) =>{
    setLogin.username(event.target.value);
  }
  const handlePasswordInputforLogin = (event) =>{
    setLogin.password(event.target.value);
  }
  return (
    <div className="signupPage">
      <div className="logo">{/* UET LOGO GOES HERE */}</div>
      <div className="signupcontainer">
        {/* LOGIN */}

        {signup == 0 ? (
          <div className="form">
            <div className="login-header">
              <h1>Login to Account</h1>
            </div>
            <div className="login-input">
              <input type="email" name="email" onChange={handleEmailInputforLogin} placeholder="Enter Email Here" />
              <input type="password" name="password" onChange={handlePasswordInputforLogin} placeholder="Enter Your Password Here" />
              <Link to='/'><button className="login-button" onClick={onLoginClick}>Log In</button></Link>
            </div>
            <div className="links">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                {" "}
                <h5 style={{ marginLeft: "10%" }}> Forgot Password ? </h5>{" "}
              </Link>
              <Link
                onClick={() => {
                  setSignup(1);
                }}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <h5 style={{ marginLeft: "10%" }}>
                  Don't have an acoount yet? Signup
                </h5>
              </Link>
            </div>
          </div>
        ) : null}

        {/* Signup 1 */}
        {signup == 1 ? (
          <div className="form">
            <div className="login-header">
              <h1>Sign Up</h1>
            </div>
            <div className="login-input">
              <input type="text" placeholder="Enter Your Username Here" />
              <input type="email" placeholder="Enter Your Email Here" />
              <button
                className="login-button"
                onClick={() => {
                  setSignup(2);
                }}
              >
                NEXT ➡
              </button>
            </div>
            <div className="links">
              <Link
                onClick={() => {
                  setSignup(0);
                }}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <h5 style={{ marginLeft: "10%" }}>
                  Already have an account? Login
                </h5>
              </Link>
            </div>
          </div>
        ) : null}

        {/* Signup 2 */}
        {signup == 2 ? (
          <div className="form">
            <div className="login-header">
              <h1>Sign Up</h1>
            </div>
            <div className="login-input">
              <input type="text" placeholder="Enter Your Username Here" />
              <input type="email" placeholder="Enter Your Email Here" />

              <div className="radios">
                <h4>Select Your Role</h4>
                <label>
                  <input
                    type="radio"
                    value="Student"
                    checked={selectedOption === "Student"}
                    onChange={handleRadioChange}
                  />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    value="Organization"
                    checked={selectedOption === "Organization"}
                    onChange={handleRadioChange}
                  />
                  Organization
                </label>
              </div>

              <button
                className="login-button"
                onClick={() => {
                  setSignup(3);
                }}
              >
                NEXT ➡
              </button>
            </div>
            <div className="links">
              <Link
                onClick={() => {
                  setSignup(1);
                }}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                
                <h5 style={{ marginLeft: "10%" }}>
                  ⬅Back
                </h5>
              </Link>
            </div>
          </div>
        ) : null}


        {/* Signup 3 */}
        {signup == 3 ? (
          <div className="form">
            <div className="login-header">
              <h1>Sign Up</h1>
            </div>
            <div className="login-input">
              <input type="number" placeholder="Enter Your Session Here (e.g. 2020)" />
              <input type="text" placeholder="Enter Your section Here" />

              <div className="radios">
                <h4>Select Your Major</h4>
                <label>
                  <input
                    type="radio"
                    value="Computer Science"
                    checked={selectedOption2 === "Computer Science"}
                    onChange={handleRadioChange2}
                  />
                  Computer Science
                </label>
                <label>
                  <input
                    type="radio"
                    value="Software Engineering"
                    checked={selectedOption2 === "Software Engineering"}
                    onChange={handleRadioChange2}
                  />
                  Software Engineering
                </label>
              </div>

              <button
                className="login-button"
                onClick={() => {
                  setSignup(4);
                }}
              >
                NEXT ➡
              </button>
            </div>
            <div className="links">
              <Link
                onClick={() => {
                  setSignup(2);
                }}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                <h5 style={{ marginLeft: "10%" }}>
                  ⬅Back
                </h5>
              </Link>
            </div>
          </div>
        ) : null}

        {/* Signup 4 */}
        {signup == 4 ? (
          <div className="form">
            <div className="login-header">
              <h1>Sign Up</h1>
            </div>
            <div className="login-input">
              <input type="password" placeholder="Set up your password" />
              <input type="password" placeholder="Re-enter your password" />
              <input type="number" placeholder="Enter OTP" />
              <Link to='/forms'>
              <button className="login-button">
                Complete Sign Up
              </button>
              </Link>
            </div>
            <div className="links">
              <Link
                onClick={() => {
                  setSignup(3);
                }}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "50%",
                  textAlign: "center",
                }}
              >
                
                <h5 style={{ marginLeft: "10%" }}>
                  ⬅Back
                </h5>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
