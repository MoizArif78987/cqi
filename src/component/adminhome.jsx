import React from "react";
import "./adminhome.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  AiOutlineUser,
  AiOutlinePieChart,
  AiOutlineForm,
} from "react-icons/ai";
import uetlogo from "../images/uet-logo.png";
import pfp from "../images/pfp-icon.png";

export default function Adminhome() {
  return (
    <>
      <div className="adminHome">
        <div className="navContainer">
          <div className="containerhead">
            <div className="logo">
              <img src={uetlogo} alt="Loading" />
            </div>

            <div className="heading">
              <h1>ADMIN PANEL</h1>
            </div>

            <div className="adminInfo">
              <div className="profpic">
                <img src={pfp} alt="Loading" />
              </div>
              <div className="info">
                <div className="name">
                  <h3>Admin Name </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="navCard">
              <Link to="/admin" style={{ textDecoration: "none" , height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="cardContainer">
                  <h1>
                    <AiOutlineForm />
                    Forms
                  </h1>
                </div>
              </Link>
            </div>


            <div className="navCard">
              <Link to="/profile"style={{ textDecoration: "none" , height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="cardContainer">
                  <h1>
                    <AiOutlineUser />
                    Profile
                  </h1>
                </div>
              </Link>
            </div>


            <div className="navCard">
              <Link to="/stats" style={{ textDecoration: "none" , height:'100%', width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="cardContainer">
                  <h1>
                    <AiOutlinePieChart />
                    Stats
                  </h1>
                </div>
              </Link>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
}
