import style from "../styles/aboutProfsnal.module.css";
import Card from "./Card";

import { v4 as uuidv4 } from "uuid";

function AboutProfsnal(props) {
  let { aboutProf } = props;
  return (
    <Card>
      <div id={"aboutprofsnal_main"} className={style.heading}>
        All About {props.technician}
      </div>
      {aboutProf.map((el) => (
        <div key={uuidv4()}>
          <div className={style.question}>{el[0]}</div>
          {el[2] &&
            el[2]
              .split("/g/")
              .map((el) => <li key={uuidv4()} className={style.answer_points}>{el}</li>)}
          <div className={style.answer}>{el[1]}</div>
        </div>
      ))}
    </Card>
  );
}

export default AboutProfsnal;
