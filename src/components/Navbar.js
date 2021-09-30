import React from 'react';
import logo from '../ImageBase/logo.png';
import style from '../styles/navBar.module.css';


function NavBar() {
    return (
        <div className={style.main}>
            <div className={style.main_container}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.navText}>
                    <div>Blog</div>
                    <div>Register As A Professional</div>
                    <div className={style.login}>Login / Sign UP</div>
                </div></div>
        </div>
    )
}

export default NavBar;