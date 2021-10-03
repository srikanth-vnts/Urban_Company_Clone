import style from "./aboutService.module.css";




function AboutService() {
  return (
    <div className={style.main}>
      <div className={style.heading}>About the service</div>
      <div className={style.row1}>
      <span className={style.tick}>✔️</span> Expert Technicians
        <br />
        <span className={style.subDetail}>
          Background checked an trained technicians
        </span>
      </div>
      <div className={style.row2}>
      <span className={style.tick}>✔️</span> Service Gaurantee
        <br />
        <span className={style.subDetail}>
          Customer Protechtion of Rs. 10000 against damages 30-day service
          gaurantee
        </span>
      </div>
    </div>
  );
}

export default AboutService;
