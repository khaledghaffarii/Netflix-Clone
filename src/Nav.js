
import React, { useState, useEffect } from 'react';
import "./Nav.css";
const Nav = () => {
    const [show, handleshow] = useState(false)
    const [showButton,handelShowButton] = useState(true)
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            handleshow(true)
            handelShowButton(false)
        } else{ handleshow(false)
         handelShowButton(true)
        };
        });
        return () => {
        window.removeEventListener("scroll")
        }
    }, [] );
    return (
    <div className={`nav ${show && "nav_black"}`}>
      <a href='/'>
         <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        />
      </a>
      <a href="#" className= {`${showButton && "Logout redButton"}`} data-uia="header-login-link" >Logout</a>
    </div>
    )
}

export default Nav
