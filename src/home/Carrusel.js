import React from "react";
import { render } from "react-dom";

import { getProps } from "../utils";
import styles from "./styles.css";

const Wrapper = selector => {
  const Carrusel = props => {
    const { values } = props;
    return values.map(value => (
      <li className={styles.list} key={value}>
        A{value}
      </li>
    ));
  };

  render(
    <Carrusel {...getProps(selector)} />,
    document.querySelector(selector)
  );
};

export default Wrapper;
