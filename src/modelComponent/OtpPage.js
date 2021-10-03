import style from "./otpPage.module.css";

import React, { useState ,useEffect} from "react";


function OtpPage(props) {
  const [inp, setInpt] = useState(0);
  const [timer, settimer] = useState(30);
  let xx=localStorage.getItem('phonenum')
  useEffect(() => {
  if(timer===28) window.alert(`OTP is ${Math.floor(1000 + Math.random () * 9000)}`)

    let time=setTimeout(()=>{
        if(timer>0)
        settimer(p=>p-1)
    }, 1000);
    return () => clearTimeout(time);
  }, [timer]);

  let validateOtp = (e) => {
      let inpt=e.target.value;
      if(inpt.length===1)
       setInpt(p=>p+1)
       else if(inpt.length===0){
        setInpt(p=>p===0? 0 : p-1)
       }
  };
  let resetimer=()=>{if(timer<1)settimer(30)}
//   setInterval(()=>settimer(p=>p-1),1000)
  let contBut = inp===4
    ? `${style.continue} ${style.continue_active}`
    : `${style.continue}`;
  return (
    <div className={style.main}>
      <div className={style.head}>Enter verification code<br/>
       <div className={style.head_sub}>We have sent you a 4 digt OTP on {xx}<span onClick={props.goback}>Edit</span></div>
      </div>
      <div className={style.inputs}>{[1,2,3,4].map((el)=><input key={el} onChange={validateOtp}/>)}<div className={style.timer} onClick={resetimer}>{timer>0? `00:${timer}` :'Resend'}</div></div>
      <button onClick={props.nextPage}  disabled={inp===4?false:true} className={contBut}>
        Login
      </button>
    </div>
  );
}

export default OtpPage;
