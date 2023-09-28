import React from "react";
import "./login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  return (
    <>
      <div className="loginpage">
        <div className="side">
          <div className="logo">
            {/* UET LOGO HERE */}
          </div>
        </div>
        <div className="form-container">
          <div className="form">
            <div className="login-header">
              <h1>Login to Account</h1>
            </div>
            <div className="login-input">
                <input type="email" placeholder="Enter Your Email Here"/>
                <input type="password" placeholder="Enter Your Password Here" />
                <button className="login-button">Log In</button>
            </div>
            <div className="links">
            <Link to='/' style={{textDecoration:'none', color:'#053872',width:"50%", textAlign:'center'}}> <h5 style={{marginLeft:'10%'}}> Forgot Password ? </h5> </Link>
            <Link to='/signup' style={{textDecoration:'none', color:'#053872',width:"50%",textAlign:'center'}}> <h5 style={{marginLeft:'10%'}}> Don't have an acoount yet? Signup </h5> </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
