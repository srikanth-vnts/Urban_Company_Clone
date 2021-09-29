import style from "../styles/professional.module.css";
import Additional_gallery from "./Additional_gallery";
import Button from "./Button";
import Card from "./Card";
import LatestReview from "./LatestReview";
import PopularService from "./PopularService";
import Professional_Indiv from "./Professional_Indiv";

let tabs = ["How it Works", "Electricians", "FAQs", "About Electricians"];

function Professional(props) {
  return (
    <>
      <Card>
        <div className={style.profInCity}>Electricians in Bangalore</div>
        <div className={style.profInCity_des}>Electricians in Bangalore</div>
      </Card>
      <Card>
      <div className={style.prof_head}>
        <div>
          <div className={style.profInCity}>Electricians</div>
          <div className={style.profInCity_num}>468 Electricians in Bangalore</div>   
        </div>
        <Button>Check More Electrician</Button> 
      </div>
      <Professional_Indiv/>
      <Professional_Indiv/>
      <Professional_Indiv/>
      </Card>
      <Additional_gallery/>
      <PopularService/>
      <LatestReview/>
    </>
  );
}

export default Professional;
