import style from "../styles/howItWork.module.css";
import option1 from '../ImageBase/option1.png';
import option2 from '../ImageBase/option2.png';
import option3 from '../ImageBase/option3.png';
import Card from "./Card"




function HowItWork(props) {
  return (
      <Card>
        <div id={'howitworks_main'} className={style.title}>How it works</div>
        <div className={style.option_tab}>
          <div className={style.option}>
              <img src={option1} alt="logo"  /> Choose the type of service</div>
          <div className={style.line}></div>
          <div className={style.option}>
          <img src={option2} alt="logo"  />
           <div>
           Choose your time-slot
            <br />
            <span className={style.option_des}>We service from 9am-9pm</span>
          
           </div>
           </div>
          <div className={style.line2}></div>
          <div className={style.option}>
          <img src={option3} alt="logo"  />
            <div>
                Hassle-free service
            <br />
            <span className={style.option_des}>Our professional will get in touch with you one hour before the service</span>
         </div>
             </div>
        </div>
      </Card>    
  );
}

export default HowItWork;
