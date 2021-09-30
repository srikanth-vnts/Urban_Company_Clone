import React from 'react';
import logo from '../ImageBase/companyLogo.svg';
import style from '../styles/navbarBlack.module.css';


export default function NavbarBlack() {
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
