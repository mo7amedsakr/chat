import React from 'react';
import classes from './User.module.scss';
import { Link } from 'react-router-dom';
import pic from '../../assets/default.jpg';

export const User = (props) => {
  return (
    <Link to={props.to} className={classes.Usr}>
      <div className={classes.UsrPic}>
        {props.online ? <div className={classes.UsrPicOnline}></div> : null}
        <img src={pic} alt="" className={classes.UsrPic} />
      </div>
      <p className={classes.UsrName}>{props.name}</p>
    </Link>
  );
};
