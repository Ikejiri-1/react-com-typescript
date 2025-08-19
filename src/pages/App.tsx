import React, { useState } from "react";
import FormComp from "../components/Form";
import List from "../components/List";
import style from "./app.module.scss";
import Timer from "../components/Timer";
import { ListProps } from "../types/tasks";
function App() {
  const [tasks, setTasks] = useState<ListProps[]>([]);

  const [selected, setSelected] = useState<ListProps>();

  function selectTask(selectedTask: ListProps) {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }
  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected?.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <FormComp setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
