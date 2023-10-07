// import React from "react";
import "./NavBar.css";
import logo from "../assets/images/logo.svg";
<style>@import url('https://fonts.google.com/specimen/Epilogue');</style>;

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <div className="nav-logo">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div className="right-nav">
          <div className="login">Login</div>
          <div className="register">Register</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
