import React, { useRef, useEffect, useContext, useState } from 'react';
import classes from './ChattingMessages.module.scss';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { AuthContext } from '../../../context/Auth';
import { useParams } from 'react-router-dom';
import { socket } from '../../../socket';

export const ChattingMessages = () => {
  const containerRef = useRef(null);
  const { user } = useContext(AuthContext);
  const { username } = useParams();
  const [msgs, setMsgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [msgs, isLoading]);

  useEffect(() => {
    socket.emit('joinRoom', { curUser: user.username, chatWith: username });
  }, [user, username]);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    socket.on('allMsgs', (messages) => {
      if (isMounted) {
        setMsgs(messages);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    socket.on('sendMsg', (newMsg) => {
      if (isMounted) {
        setMsgs((prev) => [...prev, newMsg]);
      }
    });
    return () => {
      isMounted = false;
    };
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
