import style from "../styles/footer.module.css";

import footersvg from "../ImageBase/Footer.svg"


function Footer(props) {
  return (
      <>
      {/* <div className={style.temp}></div> */}
      <div className={style.temp2}>
          <img src={footersvg} alt="footer"></img>
      </div>
      </>
  );
}


export default Footer;
