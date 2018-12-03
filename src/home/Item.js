import React, { Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import getProps from '../utils';
import styles from './styles.css';

const init = () => console.log('post');

const Wrapper = (selector) => {
  const Item = (props) => {
    const { value } = props;
    return (
      <Fragment>
        <span className={styles.list}>A{value}</span>
        {props.children}
      </Fragment>
    );
  };

  Item.propTypes = {
    value: PropTypes.string,
    children: PropTypes.array,
  };

  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    render(<Item {...getProps(element)} />, element, init);
  });
};

export default Wrapper;
