import style from "./payment.module.css";
import flag from "../ImageBase/payment.png";




function Payment() {
  return (
    <div className={style.main}>
        <img src={flag} alt="flag" />
      <button className={style.continue}>
        Continue
      </button>
    </div>
  );
}

export default Payment;
