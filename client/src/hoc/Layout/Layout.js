import React, { useContext } from 'react';
import classes from './Layout.module.scss';
import { Grid } from '@material-ui/core';
import { Button } from '../../components/Button/Button';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { Users } from '../../components/Users/Users';
import { ThemeContext } from '../../context/Theme';

export const Layout = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Grid container spacing={0} style={{ overflow: 'hidden' }}>
      <Grid item xs={2} className={classes.Right}>
        <Users />
        <Button className={classes.ThemeBtn} onClick={toggleTheme}>
          {isDark ? <FaMoon /> : <FaRegMoon />} <p>Dark Mode</p>
        </Button>
      </Grid>
      <Grid item xs={10}>
        {props.children}
      </Grid>
    </Grid>
  );
};
