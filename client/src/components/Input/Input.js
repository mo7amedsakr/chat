import React from 'react';
import classes from './Input.module.scss';

export const Input = (props) => {
  return (
    <input
      type={props.type || 'text'}
      placeholder={props.placeholder}
      className={[classes.Input, props.className].join(' ')}
      onChange={props.onChange}
      required
      ref={props.reference}
      name={props.name}
    />
  );
};
