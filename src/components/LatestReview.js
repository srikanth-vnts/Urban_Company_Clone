import style from "../styles/latestReview.module.css";
import Button from "./Button";
import Card from "./Card";



function LatestReview({data}) {
  return (
    <>
      <Card>
        <div className={style.heading}>Latest Customer Reviews <br/><span className={style.heading_sub}>of {data[1]} in {data[0]}</span>
        <div className={style.rating}>&#9733; 4.8<span>/5</span></div> 
        <div className={style.rating_count}>based on 16613 ratings</div> </div>
        <div className={style.button}><Button>View more reviews</Button></div>
        
      </Card>
    </>
  );
}

export default LatestReview;
