import style from "../styles/button.module.css";

let tabs = ["How it Works", "Electricians", "FAQs", "About Electricians"];

function Button(props) {
  return (
      <button>{props.children}</button> 
  );
}

export default Button;
