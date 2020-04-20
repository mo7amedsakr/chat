import React from 'react';
import classes from './Button.module.scss';

export const Button = (props) => {
  return (
    <button
      className={[classes.Btn, props.className].join(' ')}
      onClick={props.onClick}
      type={props.type || null}
      disabled={props.disable}
    >
      {props.children}
    </button>
  );
};
