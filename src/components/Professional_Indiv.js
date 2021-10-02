import style from "../styles/professional_indiv.module.css";
// import logo from "../ImageBase/profes1.png";
import Comments from "./Comments";
import Button from "./Button";
import React,{useState} from "react";





function Professional_Indiv({data}) {
  const [showOneComm, setshowOneComm] = useState(true)


  let showAllcomments=()=>{
    setshowOneComm(p=>!p);
  }

  return (
    <>
      <div className={style.prof_head}>
        <div className={style.prof_pic}>
          <img src={data.profilePicLink} alt="logo" />
        </div>
        <div className={style.prof_details}>
          <div className={style.prof_details_name}>{data.name}</div>
          <div className={style.prof_details_address}>
            {data.address}
          </div>
          <div className={style.prof_details_rating_tab}>
            <div className={style.prof_details_rating}>
              &#9733; {data.rating} <span> ({data.totalRating}  ratings)</span>
            </div>
            <div className={style.prof_details_rating_5star}>
              &#9679; {data.noOf5Satr}  times rated 5 star
            </div>
          </div>
          {showOneComm ? <Comments data={data.commets[0]}/> : data.commets.map(el=><Comments data={el}/>)}
          <div className={style.button}>
            <Button onClick={showAllcomments}>&#8675; &nbsp; Click to read more reviews</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Professional_Indiv;
