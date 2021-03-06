import React, { useContext, useRef } from 'react';
import classes from './ChattingSend.module.scss';
import { TextareaAutosize as Textarea } from '@material-ui/core';
import { Button } from '../../../components/Button/Button';
import { FiSend } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth';
import { socket } from '../../../socket';

export const ChattingSend = (props) => {
  const { user } = useContext(AuthContext);
  const { username } = useParams();

  const msgRef = useRef(null);

  const sendMsgHandler = () => {
    const msg = msgRef.current.value;
    msgRef.current.value = '';

    if (msg.replace(/\s/g, '') === '') {
      return;
    }
    socket.emit('sendMsg', { message: msg, from: user.username, to: username });
  };

  return (
    <div className={classes.Send}>
      <Textarea
        placeholder="Type a message..."
        className={classes.SendTextarea}
        ref={msgRef}
        onKeyDown={(e) => {
          if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            sendMsgHandler();
          }
        }}
      />
      <Button className={classes.SendBtn} onClick={sendMsgHandler}>
        <FiSend />
      </Button>
    </div>
  );
};
