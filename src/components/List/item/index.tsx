import { ListProps } from "../../../types/tasks";
import style from "../list.module.scss";

interface Props extends ListProps {
  selectTask: (selectedTask: ListProps) => void;
}
function Item({ task, time, selected, completed, id, selectTask }: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""}`}
      onClick={() => selectTask({ task, time, selected, completed, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}

export default Item;
