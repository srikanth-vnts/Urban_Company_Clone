import style from "../styles/faq.module.css";
import Card from "./Card";

import { v4 as uuidv4 } from 'uuid';




function Faq(props) {
  let faqs_data=props.faqs;

  return (
    <>
      <Card>
        <div id={"faqs_main"} className={style.heading}>
          Frequently Asked Questions
        </div>
        <div>
          {faqs_data.map((el) => (
            <div key={uuidv4()} className={style.main}>
              <div className={style.question}>
                {el[0]}
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
              <div className={style.answer}>{el[1]==='ans1'?'':el[1]}</div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default Faq;
