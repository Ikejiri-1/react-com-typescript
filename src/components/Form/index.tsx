import { useState } from "react";
import Button from "../Button";
import style from "./form.module.scss";
import { ListProps } from "../../types/tasks";

interface FormCompProps {
  setTasks: React.Dispatch<React.SetStateAction<ListProps[]>>;
}
function FormComp({ setTasks }: FormCompProps) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00:00");

  function addTasks(task: string, time: string) {
    setTasks((oldTasks) => [...oldTasks, { task, time }]);
  }
  return (
    <form
      className={style.newTask}
      onSubmit={(e) => {
        e.preventDefault();
        addTasks(task, time);
      }}
    >
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que voce quer estudar?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="04:00:00"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <Button texto="Adicionar" type="submit" />
    </form>
  );
}

export default FormComp;
