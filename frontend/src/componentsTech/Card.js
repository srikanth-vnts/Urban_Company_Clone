import style from "../styles/card.module.css";




function TabShow(props) {
  return (
      <div className={style.main}>
        {props.children}      
      </div>
  );
}

export default TabShow;
