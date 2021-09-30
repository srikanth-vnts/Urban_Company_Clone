import style from "../styles/faq.module.css";
import Card from "./Card";

let tabs = [
  `How much advance will I have to pay in case the work requires more than
one visit`,
  "Electricians",
  `In case you need a revisit for the same issue, it gets covered in our 30 - day
service guarantee policy. Hence it is free of cost.`,
  "About Electricians",
];

function Faq(props) {
  return (
    <>
      <Card>
        <div id={"faqs_main"} className={style.heading}>
          Frequently Asked Questions
        </div>
        <div>
          {tabs.map((el) => (
            <div className={style.main}>
              <div className={style.question}>
                {el}
                <span className={style.showAnsButton}>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
              <div className={style.answer}>{el}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default Faq;
