import React from 'react'
import './topnav.css';
import uetLogo from '../images/uet-lahore-logo.png';
import logout from '../images/logout.png'
import pfp from '../images/pfp.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Topnav() {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <Link to='/adminpanel' className='topnavLink'><img src={uetLogo} alt="Loading" /></Link>
      </div>
      <div className="NavProfilesction">
        <Link to='/profile' className='profileLink'>
        <div className="profile">
          <img src={pfp} alt="Loading" />
          <h5>Admin Name</h5>
        </div>
        </Link>
        <div className="logout">
          <Link to='/' className='logoutLink'><img src={logout} alt="Loading" /></Link>
        </div>
      </div>
    </div>
    </>
  )
}
