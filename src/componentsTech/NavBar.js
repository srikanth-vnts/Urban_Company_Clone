// import React,{ useState,useContext } from 'react';
import React from "react";

import logo from "../ImageBase/logo.png";
import style from "../styles/navBar.module.css";

// import React, { useState,useContext } from 'react';
// import {TechnicianAuthcontext} from "../store/technician_auth_context"

function NavBar() {
  // let {settechpageload}=useContext(TechnicianAuthcontext);
  let sett = () => {
    window.location.href = "/homepage";
    // settechpageload(false);
  };
  return (
    <div className={style.main}>
      <div className={style.main_container}>
        <div onClick={sett} className={style.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.navText}>
          <div>Blog</div>
          <div>Register As A Professional</div>
          <div className={style.login}>Login / Sign Up</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
