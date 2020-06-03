import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { GeneralButton } from '../Button/Buton';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  largeSelected: {
    width: '100%',
    display: 'flex',
    padding: '2px 4px',
    alignItems: 'center',
    minWidth: 300,
    maxWidth: 379,
  },
  itemSelected: {
    width: '100%',
    display: 'flex',
    padding: '2px 4px',
    alignItems: 'center',
    border: 'solid 1px #f89405',
    boxShadow: 'none',
    // minWidth: 300,
    // maxWidth: 379,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    height: 48,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const Search = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);
  const changeSelected = () => {
      
  }

  return (
    <>
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={8}>        
                <Paper component="form" className={!selected ? classes.largeSelected : classes.itemSelected}>
                <IconButton className={classes.iconButton} aria-label="menu" >
                    <SearchIcon />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search Counters"
                    inputProps={{ 'aria-label': 'search counters' }}
                    onFocus={() => setSelected(true)}
                    onBlur={() => setSelected(false)}
                />
                </Paper>
            </Grid>
            <Grid item xs={4}>
                {selected && (<GeneralButton clase={'btnWhite'} color={''}> Cancel </GeneralButton>)}
            </Grid>
        </Grid>
    </>
  );
}
