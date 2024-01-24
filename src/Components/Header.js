import React, { useState } from 'react';
import '../styles/Header.css';
import Topnav from './Topnav';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <Topnav /> 
      <div className="Header-section">
        <Navbar />
        <div className="container">
          <div className="header_text">
            <span>Welcome to our innovatie high school</span>
            <h1>Welcome to Sebitja Secondary School</h1>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Illum, quam? Rem totam
               deleniti autem! Cupiditate ab repellat 
              consequuntur tempore.
            </p>
          </div>
          <i id="Down-Arrow-Btn">+</i>
        </div>
      </div>
    </>
  )
}

export default Header
