import React from 'react';
import pic from "Images/icons8-trollface-96.png"
import pic2 from "../Images/code-icon-peach.svg";
import { Link } from "react-router-dom";
import image from "../Images/github-logo-with-text.png";
import image2 from "../Images/envelope.svg";

export default function Navbar() {
  return (
    <div className='nav-container'>
      <nav className="nav">
        <div className="nav-links">
          <Link to ="/">
            <img src={pic} alt="Code" className='logo'/>
          </Link>
          <Link to ="/code">
            <img src={pic2} alt="Code" className='logo'/>
          </Link>
        </div>
        <div className='social-links'>
          <a target="#" href="https://github.com/Sloan-Crawford/" className='social-link'>
            <img src={image} alt="LinkedIn"/>
          </a>
          <a target="#" href="mailto: sloan.crawford@gmail.com" className='social-link'>
            <img src={image2} alt="email"/>
          </a>
        </div>

      </nav>
    </div>
  )
};