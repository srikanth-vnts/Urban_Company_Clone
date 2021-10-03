import React from 'react';
import logo from '../ImageBase/companyLogo.svg';
import logo2 from '../ImageBase/logo.png'
import style from '../styles/navBar.module.css';
import LoginModal from './LoginModal';


function NavBar({ setIsCover }) {
    return (
        <div className={style.main}>
            <div className={style.main_container}>
                <div className={style.logo}>
                    <img src={logo2} alt="logo" />
                </div>
                <div className={style.navText}>
                    <div>Blog</div>
                    <div>Register As A Professional</div>

                    <LoginModal setIsCover={setIsCover} />

                    {/* <div className={style.login}>Login / Sign UP</div> */}

                </div>
            </div>
        </div>
    )
}

export default NavBar;