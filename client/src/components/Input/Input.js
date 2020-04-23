import React, { forwardRef } from 'react';
import classes from './Input.module.scss';

export const Input = forwardRef((props, ref) => {
  return (
    <input
      type={props.type || 'text'}
      placeholder={props.placeholder}
      className={[classes.Input, props.className].join(' ')}
      required
      ref={ref}
    />
  );
});
