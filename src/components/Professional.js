import style from "../styles/professional.module.css";
import Additionalgallery from "./Additional_gallery";
import Button from "./Button";
import Card from "./Card";
import LatestReview from "./LatestReview";
import PopularService from "./PopularService";
import ProfessionalIndiv from "./Professional_Indiv";



function Professional(props) {
  return (
    <>
      <Card>
        <div id={'professional_main'} className={style.profInCity}>Electricians in Bangalore</div>
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
      <ProfessionalIndiv/>
      <ProfessionalIndiv/>
      <ProfessionalIndiv/>
      </Card>
      <Additionalgallery/>
      <PopularService/>
      <LatestReview/>
    </>
  );
}

export default Professional;
