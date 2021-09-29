import style from "../styles/professional_indiv.module.css";
import Card from "./Card";
import logo from "../ImageBase/profes1.png";
import Comments from "./Comments";
import Button from "./Button";

let tabs = ["How it Works", "Electricians", "FAQs", "About Electricians"];

function Professional_Indiv(props) {
  return (
    <>
      <div className={style.prof_head}>
        <div className={style.prof_pic}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.prof_details}>
          <div className={style.prof_details_name}>Shekhar S</div>
          <div className={style.prof_details_address}>
            10,16th Main, 17th D cross Rd, Mahadeshwari Nagar, Stage 2, BTM 2nd
            stage, Bengaluru, Kar...
          </div>
          <div className={style.prof_details_rating_tab}>
            <div className={style.prof_details_rating}>
              &#9733; 4.8 <span> (1697 ratings)</span>
            </div>
            <div className={style.prof_details_rating_5star}>
              &#9679; 409 times rated 5 star
            </div>
          </div>
          <Comments />
          <div className={style.button}>
            <Button>&#8675; &nbsp; Click to read more reviews</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Professional_Indiv;
