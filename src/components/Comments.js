import style from "../styles/comments.module.css";
import Card from "./Card";
import logo from '../ImageBase/profes1.png';


let tabs = ["How it Works", "Electricians", "FAQs", "About Electricians"];

function Comments(props) {
  return (
    <>
      <div className={style.review_head}>
          <div className={style.reviewer_pic}>S</div>
          <div className={style.review}>
              <div className={style.revier_name}>Shekhar S</div>
                  <div className={style.rating}>&#9733; 4.8</div>
                  <div className={style.comments}>Delayed over a week but very polite person. Good job.</div>  
           </div>        
      </div> 
    </>
  );
}

export default Comments;
