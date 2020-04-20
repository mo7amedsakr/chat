import React from 'react';
import classes from './Chatting.module.scss';
import { Header } from './Header/Header';
import { ChattingMessages } from './ChattingMessages/ChattingMessages';
import { ChattingSend } from './ChattingSend/ChattingSend';

export const Chatting = () => {
  return (
    <div className={classes.Chat}>
      <Header />
      <ChattingMessages />
      <ChattingSend />
    </div>
  );
};
