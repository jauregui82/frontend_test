import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
// import Loader from '../Loader/loader';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height : '100vh',
    }
}));

export const Layout = (props) => {
    const classes = useStyles();
    // console.log('====>>>',props);
    
    return(
        <>
            {/* <Loader /> */}
            <CssBaseline />
            <Container maxWidth="lg" className={classes.root}>
               {props.children}
            </Container>
        </>
    )
} 