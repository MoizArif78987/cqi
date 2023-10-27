import React from 'react'
import Navbar from './nav';
import "./profile.css";
import profpic from '../images/pfp-icon.png';

export default function Profile() {
  return (
    <div className='prof'>
      <Navbar active="Profile"/>
      <div className='uploadpic'>
        <div className='imgg'>
          <img src={profpic} alt="Loading" />
        </div>
        <input className='upimg' type='file' />
      </div>
      
      <div className='profbox'>
        <button className='profbtn'>Change Name</button><br/>
        <button className='profbtn'>Change Password</button>
      </div>
      
    </div>
  )
}
