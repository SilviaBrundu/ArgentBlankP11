import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../designs/img/argentBankLogo.webp";
import './index.css'

function Header() {
    return (
      <header>
        <nav className="navbar">
          <NavLink to="/">
            <img
              src={logo}
              alt="ArgentBank Logo"
              className="navbar_logo"
            />
          </NavLink>
          <div className="navbar_signin_container">
            <NavLink to="/login" className="navbar_signin">
                <i className="fa-solid fa-circle-user iconSignin"></i>
                <p>Sign In</p>
            </NavLink>
          </div>
        </nav>
      </header>
    )
  }
  
  export default Header