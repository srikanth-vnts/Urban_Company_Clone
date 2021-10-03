import style from "./phoneNumber.module.css";
import flag from "../ImageBase/flag.png";

import React, { useState, useEffect } from "react";
// import { validate } from "uuid";

let x = (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="#212121" />
  </svg>
);

function PhoneNumber(props) {
  const [error, seterror] = useState(false);
  const [validInpt, setvalidInpt] = useState(false);
  const [inp, setInpt] = useState('');

  let continueNext=()=>{
      localStorage.setItem('phonenum', `${inp}`)
    //   let xx=localStorage.getItem('phonenum')
    //   console.log(xx);
    props.nextPage()
  }
  let validateInput = (e) => {
    setInpt(e.target.value)
  };
  useEffect(() => {
    let time=setTimeout(()=>{
        if(inp.length===0){
            seterror(false)
            setvalidInpt(false);
        }
        else if(inp.length!==10){
            seterror(true)
            setvalidInpt(false);
        }
        else{
            seterror(false)
            setvalidInpt(true);
        }
    }, 1000);
    return () => clearTimeout(time);
  }, [inp]);

  let inpStyl = error
    ? `${style.inputbar} ${style.inputbarError}`
    : `${style.inputbar}`;
  let contBut = validInpt
    ? `${style.continue} ${style.continue_active}`
    : `${style.continue}`;
  return (
    <div className={style.main}>
      <div className={inpStyl}>
        <img src={flag} alt="flag" />
        <span className={style.countryCode}>+91 {x} </span>
        <input placeholder="Enter number" onChange={validateInput}/>
        {error && (
          <p className={style.error}>Please enter a valid mobile number</p>
        )}
      </div>
      <button  disabled={!validInpt} className={contBut} onClick={continueNext}>
        Continue
      </button>
    </div>
  );
}

export default PhoneNumber;
