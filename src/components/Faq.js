import style from "../styles/faq.module.css";
import Additional_gallery from "./Additional_gallery";
import Button from "./Button";
import Card from "./Card";
import LatestReview from "./LatestReview";
import PopularService from "./PopularService";
import Professional_Indiv from "./Professional_Indiv";

let tabs = ["How it Works", "Electricians", "FAQs", "About Electricians"];

function Faq(props) {
  return (
    <>
      <Card>
        <div className={style.heading}>Frequently Asked Questions</div>
        <div>{tabs.map(el=><div className={style.main}>
            <div className={style.question}>{el}</div>
            <div className={style.answer}>{el}</div>
        </div>)}</div>
      </Card>
    </>
  );
}

export default Faq;
