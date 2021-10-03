import style from "../styles/popularServices.module.css";
import Card from "./Card";

import { v4 as uuidv4 } from 'uuid';



let services = ["Carpenter","Kitchen cleaning Services","Fridge Repair","Salons","Spa"]

function PopularService(props) {
  return (
    <>
      <Card>
        <div className={style.heading}>Popular Services Near You</div>
        <div className={style.main}>
        {services.map(el=>
              <div key={uuidv4()} className={style.main_child}>{el}</div>
        )}
       </div> 
      </Card>
    </>

  );
}

export default PopularService;
