import React from 'react';
import classes from './ChatMessage.module.scss';

export const ChatMessage = (props) => {
  const msgCreatedAt = new Date(props.createdAt);
  const time = `${msgCreatedAt.getHours()}:${msgCreatedAt.getMinutes()}`;

  return (
    <div
      className={[
        classes.Container,
        props.type === 'recevied'
          ? classes.Recevied
          : props.type === 'sent'
          ? classes.Sent
          : null,
      ].join(' ')}
    >
      <p className={classes.Msg}>{props.msg}</p>
      <p className={classes.Date}>{time}</p>
    </div>
  );
};
