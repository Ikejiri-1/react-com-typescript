import Button from "../Button";
import Clock from "./Clock/Clock";
import style from "./timer.module.scss";
function Timer() {
  return (
    <div className={style.timer}>
      <p className={style.title}>Ecolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button texto="Começar" />
    </div>
  );
}
export default Timer;
