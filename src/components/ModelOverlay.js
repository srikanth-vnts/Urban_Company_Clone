import AboutService from "../modelComponent/AboutService";
import PhoneNumber from "../modelComponent/PhoneNumber";
import style from "../styles/modelOverlay.module.css";
// import {Authcontext} from "../store/auth_context_prof_data"
// import React,{useContext} from "react";

// import { v4 as uuidv4 } from 'uuid';

function ModelOverlay() {
  //   let {needfor,ratingStatus,category}=useContext(Authcontext)[0];
  //   console.log(needfor,ratingStatus,category);
  // document.getElementsByTagName('body').classlist.add(style.block)
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <div className={style.head}>
          Electrician
          <span className={style.cancel}>
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
        {/* <AboutService /> */}
        <PhoneNumber/>
        <button className={style.heroButton}>Next</button>
      </div>
    </div>
  );
}

export default ModelOverlay;
