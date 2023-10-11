import React from 'react'
import "./admin.css";
import Navbar from './nav';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {AiOutlineSearch} from 'react-icons/ai'

export default function Admin() {
  return (
    <div className="adminPage">
      <Navbar active="Home"/>
      {/* <div className='searchbar'><input style={{width:"93%",backgroundColor:" rgb(201, 200, 200)",color:"white",fontSize:"25px",border:"none",marginLeft:"2%",marginTop:"0px",height:"70%"}} type='text'placeholder='Search Form'/>< AiOutlineSearch/></div> */}
    
      <div className='cards'>
      <Link to='/form' style={{textDecoration:'none'}}><div className='card1'>
          <div className='cardheading'>Card 1</div>
          <div className='desc'>This is cards description</div>
        </div></Link>
        <div className='card1'>
          <div className='cardheading'>Card 2</div>
          <div className='desc'>This is cards description</div>
          </div>
        <div className='card1'>
          <div className='cardheading'>Card 3</div>
          <div className='desc'>This is cards description</div>
          </div>
      </div>

      <button className='newformbtn'>Add new Form</button>
    </div>
  )
}
