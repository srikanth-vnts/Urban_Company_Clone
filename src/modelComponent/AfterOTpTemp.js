import style from "./aboutService.module.css";




function AfterOTpTemp() {
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
    </div>
  );
}

export default AfterOTpTemp;
