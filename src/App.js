import React, { Fragment, useState } from "react";
import Aside from "../components/Aside/Aside";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import "./styles.css";

export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <Fragment>
      <Header menu={menu} setMenu={setMenu} />
      <Aside menu={menu} setMenu={setMenu} />
      <Main />
    </Fragment>
  );
}
