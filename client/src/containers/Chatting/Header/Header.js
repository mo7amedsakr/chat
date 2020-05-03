import React from 'react';
import classes from './Header.module.scss';
import { useParams } from 'react-router-dom';
import pic from '../../../assets/default.jpg';

export const Header = () => {
  const { username } = useParams();

  return (
    <div className={classes.Header}>
      <img src={pic} alt={username} className={classes.HeaderImg} />
      <p className={classes.HeaderName}>{username}</p>
    </div>
  );
};
