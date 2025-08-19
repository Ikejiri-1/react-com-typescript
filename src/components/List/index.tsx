import React from "react";
import style from "./list.module.scss";
function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
      id: 1,
    },
    {
      task: "JavaScript",
      time: "01:00:00",
      id: 2,
    },
    {
      task: "TypeScript",
      time: "03:00:00",
      id: 3,
    },
  ];
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, id) => (
          <li key={id} className={style.item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
