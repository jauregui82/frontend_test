import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform : 'inherit', 
        width: 136,
        height: 40,
        display: 'flex',
        border: 0,
        outline: 'none',
        padding: '8px 24px',
        backgroundColor: '#FF9500',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: 8,
        transition: 'all .2s ease',
        '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        },
      },      
      disabled: {
        opacity: 0.5,
        cursor: 'auto',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
      }
      
    //   button-white {
    //     backgroundColor: '#FFFFFF',
    //   }
      
    //   .button-span {
    //     display: 'flex',
    //     fontWeight: 600,
    //     color: '#FFFFFF',
    //     alignItems: 'center',
    //   }
      
    //   .button-span-white {
    //     color: '#FF9500',
    //   }
}));

export const GeneralButton = (props) => {
    const classes = useStyles();
    const { children } = props;
    
    return(
        <>
            <Button className={classes.button } color={'primary'} variant={'contained'}> {children}</Button>
        </>
    )
}