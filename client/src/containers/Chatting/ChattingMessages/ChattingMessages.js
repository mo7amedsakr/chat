import React, { useRef, useEffect, useContext, useState } from 'react';
import classes from './ChattingMessages.module.scss';
import { ChatMessage } from './ChatMessage/ChatMessage';
import AuthContext from '../../../context/Auth/AuthContext';
import { useParams } from 'react-router-dom';
import { socket } from '../../../socket';

export const ChattingMessages = () => {
  const containerRef = useRef(null);
  const { user } = useContext(AuthContext);
  const { username } = useParams();
  const [msgs, setMsgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(isLoading);
    console.log(msgs);
  });

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [msgs, isLoading]);

  useEffect(() => {
    setIsLoading(true);
    socket.emit('room', { curUser: user.username, chatWith: username });
    socket.on('getAllMsgs', (data) => {
      console.log('getAllMsgs');
      setMsgs(data);
      setIsLoading(false);
    });
  }, [user, username]);

  useEffect(() => {
    socket.on('sendmsg', (data) => setMsgs((prev) => [...prev, data]));
  }, []);

  return (
    <div className={classes.Msgs} ref={containerRef}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        msgs.map((msg, i) => (
          <ChatMessage
            key={`${msg.user}-${i}`}
            type={msg.user === user.username ? 'sent' : 'recevied'}
            createdAt={msg.createdAt}
            msg={msg.message}
          />
        ))
      )}
    </div>
  );
};
