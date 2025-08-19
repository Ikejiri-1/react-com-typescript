import { timeInSeconds } from "../../common/utils/time";
import { ListProps } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock/Clock";
import style from "./timer.module.scss";
import { useState, useEffect } from "react";

interface TimerProps {
  selected: ListProps | undefined;
}

function Timer({ selected }: TimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeInSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.timer}>
      <p className={style.title}>Ecolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button texto="Começar" />
    </div>
  );
}
export default Timer;
