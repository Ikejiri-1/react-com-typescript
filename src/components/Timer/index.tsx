import { timeInSeconds } from "../../common/utils/date";
import Button from "../Button";
import Clock from "./Clock/Clock";
import style from "./timer.module.scss";
function Timer() {
  console.log("timer:", timeInSeconds("01:01:01"));
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
