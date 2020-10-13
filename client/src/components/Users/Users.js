import React, { useEffect, useState } from 'react';
import classes from './Users.module.scss';
import { User } from '../User/User';
import { socket } from '../../socket';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    socket.on('usersChanged', (newUsers) => {
      if (isMounted) {
        setUsers(newUsers);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={classes.Users}>
      <h2 className={classes.UsersTitle}>Users</h2>

      {users.map((user) => (
        <User
          key={user.username}
          name={user.username}
          to={`/chat/${user.username}`}
          online={user.online}
        />
      ))}
    </div>
  );
};
