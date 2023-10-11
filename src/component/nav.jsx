import React from 'react'
import './nav.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiOutlineHome,AiOutlineUser ,AiOutlinePieChart} from "react-icons/ai";

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div className="logo">{/* UET LOGO GOES HERE */}</div>
      <div className='nav_options'>
        {props.active==="Home" ? <button className='navbtn' style={{marginLeft:'140px'}}><Link to="/admin" style={{textDecoration: "none",color: "rgba(255, 255, 0, 0.7)",width: "50%",textAlign: "center"}}><AiOutlineHome/>Home</Link></button> :
        <button className='navbtn' style={{marginLeft:'140px'}}><Link to="/admin" style={{textDecoration: "none",color: "white",width: "50%",textAlign: "center"}}><AiOutlineHome/>Home</Link></button>}

        {props.active==="Profile" ?<button className='navbtn'><Link to="/profile" style={{textDecoration: "none",color: "rgba(255, 255, 0, 0.7)",width: "50%",textAlign: "center"}}><AiOutlineUser/>Profile</Link></button>
         : <button className='navbtn'><Link to="/profile" style={{textDecoration: "none",color: "white",width: "50%",textAlign: "center"}}><AiOutlineUser/>Profile</Link></button>}
        

        {props.active==="Stats" ? <button className='navbtn'><Link to="/stats" style={{textDecoration: "none",color: "rgba(255, 255, 0, 0.7)",width: "50%",textAlign: "center"}}><AiOutlinePieChart/>Stats</Link></button>
        :<button className='navbtn'><Link to="/stats" style={{textDecoration: "none",color: "white",width: "50%",textAlign: "center"}}><AiOutlinePieChart/>Stats</Link></button>}
        

      </div>
      <div className="profpic">{/* YOUR PIC GOES HERE */}</div>
      <div className='name'>Fatima Zafar<br/>
      2020-CS-664
      </div>
      
      
    </div>
  )
}
