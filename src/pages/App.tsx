import React, { useState } from "react";
import FormComp from "../components/Form";
import List from "../components/List";
import style from "./app.module.scss";
import Timer from "../components/Timer";
import { ListProps } from "../types/tasks";
function App() {
  const [tasks, setTasks] = useState<ListProps[]>([]);
  return (
    <div className={style.AppStyle}>
      <FormComp setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
