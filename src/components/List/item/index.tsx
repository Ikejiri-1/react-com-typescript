import style from "../list.module.scss";

interface ItemProps {
  task: string;
  time: string;
}

function Item({ task, time }: ItemProps) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}

export default Item;
