import style from "../styles/comments.module.css";




function Comments({data}) {
  
  return (
    <>
      <div className={style.review_head}>
          <div className={style.reviewer_pic}>{data[0][0]}</div>
          <div className={style.review}>
              <div className={style.revier_name}>{data[0]}</div>
                  <div className={style.rating}>&#9733; {data[1]}</div>
                  <div className={style.comments}>{data[2]}</div>  
           </div>        
      </div> 
    </>
  );
}

export default Comments;
