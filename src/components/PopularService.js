import style from "../styles/popularServices.module.css";
import Card from "./Card";


let services = ["How it Works", "Electricians", "FAQs", "About Electricians"];

function PopularService(props) {
  return (
    <>
      <Card>
        <div className={style.heading}>Popular Services Near You</div>
        <div className={style.main}>
        {services.map(el=>
              <div className={style.main_child}>{el}</div>
        )}
       </div> 
      </Card>
    </>
  );
}

export default PopularService;
