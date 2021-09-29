import style from "../styles/stickTab.module.css";
import option1 from '../ImageBase/option1.png';


let tabs=['How it Works','Electricians','Customer Reviews','FAQs','About Electricians']

function StickTab() {
  return (
    <>
    <div className={style.main}>
        <div className={style.reqfor}>
            <div className={style.reqfor_head}>Need an Electrician for:</div>
            {tabs.map(el=><div className={style.reqfor_child}>{el}</div>)}
        </div>
        <div className={style.rating}>
            <div className={style.rating_num}>
                 <div className={style.rating_green}>&#9733; 4.8<span className={style.sub}>/5</span></div>
                <div className={style.rating_text}>Based on 16,369</div>
            </div>
            <div className={style.rating_booking_num}>
                <div className={style.rating_black}>1,49,456</div>
                <div className={style.rating_text}>Bookings done in last 1 year</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default StickTab;
