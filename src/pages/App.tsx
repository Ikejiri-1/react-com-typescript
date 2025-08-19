import React from "react";
import FormComp from "../components/Form";
import List from "../components/List";
import style from "./app.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <FormComp />
      <List />
    </div>
  );
}

export default App;
