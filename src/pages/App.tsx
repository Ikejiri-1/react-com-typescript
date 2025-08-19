import React from "react";
import FormComp from "../components/Form";
import List from "../components/List";
import style from "./app.module.scss";
import Timer from "../components/Timer";

function App() {
  return (
    <div className={style.AppStyle}>
      <FormComp />
      <List />
      <Timer />
    </div>
  );
}

export default App;
