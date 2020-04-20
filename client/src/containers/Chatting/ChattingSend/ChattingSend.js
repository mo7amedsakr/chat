import React, { useContext, useState } from 'react';
import classes from './ChattingSend.module.scss';
import { TextareaAutosize as Textarea } from '@material-ui/core';
import { Button } from '../../../components/Button/Button';
import { FiSend } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import AuthContext from '../../../context/Auth/AuthContext';
import { socket } from '../../../socket';

export const ChattingSend = (props) => {
  const { user } = useContext(AuthContext);
  const { username } = useParams();

  const [msg, setMsg] = useState('');

  const sendMsgHandler = () => {
    if (msg.trim() === '') {
      return setMsg('');
    }
    socket.emit('sendmsg', {
      message: msg,
      from: user.username,
      to: username,
    });
    setMsg('');
  };

  return (
    <div className={classes.Send}>
      <Textarea
        placeholder="Type a message..."
        className={classes.SendTextarea}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
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
