import React from 'react'
import Navbar from './nav';
import "./profile.css";

export default function Profile() {
  return (
    <div className='prof'>
      <Navbar active="Profile"/>
      <div className='uploadpic'>
        <div className='imgg'></div>
        <input className='upimg' type='file' />
      </div>
      
      <div className='profbox'>
        <button className='profbtn'>Change Name</button><br/>
        <button className='profbtn'>Change Password</button>
      </div>
      
    </div>
  )
}
