import style from "../styles/professional.module.css";
import Additionalgallery from "./Additional_gallery";
import Button from "./Button";
import Card from "./Card";
import LatestReview from "./LatestReview";
import PopularService from "./PopularService";
import ProfessionalIndiv from "./Professional_Indiv";

import {AuthcontextProfessionalProfileDetails} from "../store/auth_context_prof_data"
import React,{useContext} from "react";

import { v4 as uuidv4 } from 'uuid';


function Professional(props) {
  let [city,professional,numofprof]=props.route;
  let data=useContext(AuthcontextProfessionalProfileDetails);
  // console.log(data);

  return (
    <>
      <Card>
        <div id={'professional_main'} className={style.profInCity}>{professional} in {city}</div>
        <div className={style.profInCity_des}>Get {professional} in {city} near you within 90 minutes with...</div>
      </Card>
      <Card>
      <div className={style.prof_head}>
        <div>
          <div className={style.profInCity}>{professional}</div>
          <div className={style.profInCity_num}>{numofprof} {professional} in {city}</div>   
        </div>
        <Button>Check More {professional}</Button> 
      </div>
      {data.map(el=><ProfessionalIndiv key={uuidv4()} data={el}/>)}
      </Card>
      <Additionalgallery data={props.route}/>
      <PopularService/>
      <LatestReview data={props.route}/>
    </>
  );
}

export default Professional;
