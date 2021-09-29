import style from "../styles/latestReview.module.css";
import Button from "./Button";
import Card from "./Card";


let services = ["How it Works", "Electricians", "FAQs", "About Electricians"];

function LatestReview(props) {
  return (
    <>
      <Card>
        <div className={style.heading}>Popular Services Near You <br/><span className={style.heading_sub}>of Electricians in Bangalore</span>
        <div className={style.rating}>&#9733; 4.8<span>/5</span></div> 
        <div className={style.rating_count}>based on 16613 ratings</div> </div>
        <div className={style.button}><Button>View more reviews</Button></div>
        
      </Card>
    </>
  );
}

export default LatestReview;
