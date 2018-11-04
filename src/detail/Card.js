import React, { Fragment } from 'react';
import { render } from 'react-dom';

import getProps from '../utils';
import styles from './styles.css';

const Wrapper = (selector) => {
  const Card = (props) => {
    const { description } = props;
    return (
      <Fragment>
        <p className={styles.cars}>{description}</p>
        {props.children}
      </Fragment>
    );
  };

  render(<Card {...getProps(selector)} />, document.querySelector(selector));
};

export default Wrapper;
