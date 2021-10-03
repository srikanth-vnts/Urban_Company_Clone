import style from "../styles/button.module.css";


function Button(props) {
  return (
      <button onClick={props.onClick} className={style.button}>{props.children}</button> 
  );
}

export default Button;
