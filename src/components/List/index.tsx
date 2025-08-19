import Item from "./item";
import style from "./list.module.scss";
import { ListProps } from "../../types/tasks";

function List({ tasks }: { tasks: ListProps[] }) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
