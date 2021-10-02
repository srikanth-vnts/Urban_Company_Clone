import React, { useContext } from "react";
import style from "../styles/dashBoard.module.css";
import { Authcontext } from "../store/auth_context_prof_data";

import { v4 as uuidv4 } from "uuid";

/*let setbg=()=>{
  let dashId=document.getElementById('setbg')
  dashId.style.height="100vh";
  console.log(dashId.style);
}
*/

function DashBoard() {
  let data = useContext(Authcontext)[0];
  let route = [data.city, data.category];
  let options = data.dashboard;
  // let bgImgLink=data.dashboard_img;
  // setTimeout(setbg,2000);




  return (
    <div
      style={{
        background: `linear-gradient(to right,rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url(${data.dashboard_img}) no-repeat  center `
      }}
      className={style.main}
    >
      <div className={style.route}>Home {route.map((el) => "/ " + el)}</div>
      <div className={style.herotext}>
        <ul className={style.herotext_head}>
          <h1>
            Get {route[1]} in {route[0]}{" "}
          </h1>
          {options.map((el) => (
            <li key={uuidv4()}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashBoard;
