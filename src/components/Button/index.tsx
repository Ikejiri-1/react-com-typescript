import React from "react";
import style from "./button.module.scss";

interface ButtonProps {
  texto: string;
}
function Button({ texto }: ButtonProps) {
  return <button className={style.buttonMain}>{texto}</button>;
}

export default Button;
