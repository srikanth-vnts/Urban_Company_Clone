import React, { useState } from 'react';
import logo from '../ImageBase/companyLogo.svg';
import style from '../styles/navbarBlack.module.css';
import LoginModal from './LoginModal';


export default function NavbarBlack({ setIsCover }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

        if (isOpen) {
            // loginModal.style.maxHeight = "0px";//{display:none}
            console.log("toggle: ", isOpen)
            // <LoginModal />
        }
        else {
            console.log("toggle: ", isOpen)
            // loginModal.style.maxHeight = "100vh";//{display:none}

        }


    }


    return (
        <div className={style.main}>
            <div className={style.main_container}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.navText}>
                    <div>Blog</div>
                    <div>Register As A Professional</div>


                    <LoginModal setIsCover={setIsCover} />
                </div>


            </div>
        </div>
    )
}


