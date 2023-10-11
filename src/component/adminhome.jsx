import React from "react";
import "./adminhome.css";
import {
  AiOutlineUser,
  AiOutlinePieChart,
  AiOutlineForm,
} from "react-icons/ai";

export default function Adminhome() {
  return (
    <>
      <div className="adminHome">
        <div className="navContainer">
            
          <div className="containerhead">
            <div className="logo"></div>
            <div className="heading">
              <h1>Admin Panel</h1>
            </div>

            <div className="profpic">{/* YOUR PIC GOES HERE */}</div>
            <div className="name">
              Fatima Zafar
              <br />
              2020-CS-664
            </div>
          </div>

          <div className="container">
            <div className="navCard">
              <div className="cardContainer">
                <h1>
                  <AiOutlineForm />
                  Forms
                </h1>
              </div>
            </div>

            <div className="navCard">
              <div className="cardContainer">
                <h1>
                  <AiOutlinePieChart />
                  Stats
                </h1>
              </div>
            </div>

            <div className="navCard">
              <div className="cardContainer">
                <h1>
                  <AiOutlineUser />
                  Profile
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
