import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    footerContainer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: '50%',
        transform: 'translate(-50%, 0)',
    },
    footerContent: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        padding: '0 2rem',
        left: '50%',
        transform: 'translate(-50%, 0)',
        maxWidth: 570,
    },
}));

export const ViewStoreAction = (props) => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.footerContainer}>
                <Divider/>
                <div className={classes.footerContent}>
                    <Grid container justify="space-between">
                        <Grid item>
                            
                        </Grid>
                        <Grid item>
                            <p>
                                hola
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
} 