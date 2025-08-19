import style from "./button.module.scss";

interface ButtonProps {
  texto: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}
function Button({ texto, type, onClick }: ButtonProps) {
  return (
    <button className={style.buttonMain} type={type} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;
