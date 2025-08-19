import style from "./button.module.scss";

interface ButtonProps {
  texto: string;
  type?: "submit" | "button" | "reset" | undefined;
}
function Button({ texto, type }: ButtonProps) {
  return (
    <button className={style.buttonMain} type={type}>
      {texto}
    </button>
  );
}

export default Button;
