import AboutService from "../modelComponent/AboutService";
import PhoneNumber from "../modelComponent/PhoneNumber";
import style from "../styles/modelOverlay.module.css";

import React, { useState } from "react";
import OtpPage from "../modelComponent/OtpPage";
import Product from "./Product";
import Payment from "../modelComponent/Payment";
import AddressModal from "../modelComponent/AddressModal";
// import AutocompleteInput from "../modelComponent/AddressModal";



function ModelOverlay(props) {
  const [screen, setScreen] = useState(1);
  let showScreen,nextflag = true;

  let cancelOnclick_overlay=(e)=>{
      if(e.target.className===style.backdrop)
      props.onCancelbutton();
  }
  let goback = () => {
    setScreen((p) => p - 1);
  };

  let nextPage = () => setScreen((p) => p + 1);

  if (screen === 1) {
    showScreen = <AboutService />;//<AddressModal />;
    nextflag = true;
  } 
  else if(screen === 2){
    showScreen=<Product nextPage={nextPage}/>
      nextflag = false;
  }
  else if (screen === 3) {
    showScreen = <PhoneNumber nextPage={nextPage}/>;
    nextflag = false;
  } else if (screen === 4) {
    showScreen = <OtpPage nextPage={nextPage} goback={goback} />;
    nextflag = false;
  }
  else{
    showScreen = <Payment nextPage={nextPage} />;
    nextflag = false;
  }
  return (
    <div className={style.backdrop} onClick={cancelOnclick_overlay}>
      
      <div className={`${style.modal} ${screen===2?style.modal_productPage:''}`}>
        <div className={style.head}>
          {screen > 1 && (
            <span className={style.goBackArrow} onClick={goback}>
              ←
            </span>
          )}
          Electrician
          <span className={style.cancel} onClick={props.onCancelbutton}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.705 1.70498L10.295 0.294983L5.99998 4.58998L1.70498 0.294983L0.294983 1.70498L4.58998 5.99998L0.294983 10.295L1.70498 11.705L5.99998 7.40998L10.295 11.705L11.705 10.295L7.40998 5.99998L11.705 1.70498Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        {showScreen}
        {nextflag && (
          <button className={style.heroButton} onClick={nextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ModelOverlay;
