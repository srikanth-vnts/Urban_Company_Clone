import style from "../styles/stickTab.module.css";
import {Authcontext} from "../store/auth_context_prof_data"
import React,{useContext,useState} from "react";



import { v4 as uuidv4 } from 'uuid';
import ModelOverlay from "./ModelOverlay";


function StickTab() {
  const [overlay, setoverlay] = useState(false);

  let {needfor,ratingStatus,category}=useContext(Authcontext)[0];


  return (
    <>
    {overlay && <ModelOverlay onCancelbutton={()=>setoverlay(false)}/>}
    <div className={style.main}>
        <div className={style.reqfor}>
            <div className={style.reqfor_head}>Need an {category} for:</div>
            {needfor.map(el=><div key={uuidv4()} className={style.reqfor_child} onClick={()=>setoverlay(true)}>{el}</div>)}
        </div>
        <div className={style.rating}>
            <div className={style.rating_num}>
                 <div className={style.rating_green}>&#9733; {ratingStatus[0]}<span className={style.sub}>/5</span></div>
                <div className={style.rating_text}>Based on {ratingStatus[1]}</div>
            </div>
            <div className={style.rating_booking_num}>
                <div className={style.rating_black}>{ratingStatus[2]}</div>
                <div className={style.rating_text}>Bookings done in last 1 year</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StickTab;
