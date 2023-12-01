import React from "react";
import { useState } from "react";
import "./profile.css";
import Topnav from "./topnav";
import Sidenav from "./sidenav";
import pfp from '../images/pfp.png'

export default function Profile() {
  const [profile, setProfile] = useState({ Name: 'Admin', Email: 'superadmin@gmail.com', Password: 'SuperAdminUET' });
  const HandleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  
  return (
    <>
      <div className="profilePage">
        <Topnav />
        <div className="ContainerWithSideNav">
          <Sidenav active="Profile" />
          <div className="profilePageContainer">
            <div className="profilecard">
              <div className="imageDiv">
                <div className="imageContainer">
                  <img src={pfp} alt="Loading" />
                </div>
              </div>
              <form>
                <div className="labelDiv">
                  <label>Name</label>
                  <input type="text" name="Name" value={profile.Name} onChange={HandleInputChange}/>
                </div>
                <div className="labelDiv">
                  <label>Email</label>
                  <input type="email" name="Email" value={profile.Email} onChange={HandleInputChange}/>
                </div>
                <div className="labelDiv">
                  <label>Password</label>
                  <input type="password" name="Password" value={profile.Password} onChange={HandleInputChange}/>
                </div>
                <button>Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
