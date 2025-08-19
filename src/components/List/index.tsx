import Item from "./item";
import style from "./list.module.scss";
import { ListProps } from "../../types/tasks";

interface Props {
  tasks: ListProps[];
  selectTask: (selectedTask: ListProps) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
