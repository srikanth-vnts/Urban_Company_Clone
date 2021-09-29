import React from "react";
import style from "../styles/dashBoard.module.css";

let route=['Bangalore','Electricians'];

let options=['Doorstep repair within 90 mins','Protection against damage upto INR 10,000','30 day post-service gaurantee']


function DashBoard() {
  return (
    <div className={style.main}>
      <div className={style.route}>
      Home { route.map(el=>'/ '+el)}
    </div>
      <div className={style.herotext}>
        <ul className={style.herotext_head}>
          <h1>Get {route[1]} in {route[0]} </h1>
          {options.map(el=><li>{el}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default DashBoard;
