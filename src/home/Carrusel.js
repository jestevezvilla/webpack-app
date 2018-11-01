import React from 'react';
import { render } from 'react-dom';

import { getProps } from '../utils';
import styles from './styles.css';

const init = () => $('input[id*=datepicker]').datepicker();

const Wrapper = (selector) => {
  const Carrusel = (props) => {
    const { values } = props;

    return values.map(value => (
      <li className={styles.list} key={value}>
        A{value}
        <input id={`datepicker${value}`} />
      </li>
    ));
  };

  render(<Carrusel {...getProps(selector)} />, $(selector)[0], init);
};

export default Wrapper;
