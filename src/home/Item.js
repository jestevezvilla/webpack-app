import React, { Fragment } from 'react';
import { render } from 'react-dom';

import getProps from '../utils';
import styles from './styles.css';

const init = () => $('input[id*=datepicker]').datepicker();

const Wrapper = (selector) => {
  const Item = (props) => {
    const { value } = props;
    // fetch('https://swapi.co/api/planets/1/').then(result => console.log(result));

    return (
      <Fragment>
        <span className={styles.list}>A{value}</span>
        <input id={`datepicker${value}`} />
        {props.children}
      </Fragment>
    );
  };

  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    render(<Item {...getProps(element)} />, element, init);
  });
};

export default Wrapper;
