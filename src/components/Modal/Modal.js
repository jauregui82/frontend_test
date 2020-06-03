import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, TextField, Grid } from '@material-ui/core';
import { GeneralButton } from '../Button/Buton';
import { Example } from './Example';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderBlockEnd: 'solid 1px rgba(196, 196, 196, 0.35)',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: '#000000',
    fontWeight: 'bold',
  },
  dialog: {
    background: '#FFFFFF',
    boxShadow: '0px 2px 32px rgba(0, 0, 0, 0.25)',
    borderRadius: 16,
  },
  chip: {
    padding: '8px 18px',
    background: '#ECECEC',
    border: '1px solid #DCDCDF',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 99,
    margin: '8px 8px 30px 0px',
    cursor: 'pointer',
    height: 40,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 17,
  },
  closeIcon: {
    color: '#fff',
    background: '#C4C4C4',
    borderRadius: '50%',
    padding: 2,
    '&:hover':{
      backgroundColor: '#979393ed'
    }
  },
  textExample: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: '#888B90',
    paddingLeft: '1rem',
  },
  textLink: {
    color: '#000',
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover':{
      color: '#FF9500'
    }
  },
  inputCups: {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: 8,
    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.15)',
      borderRadius: 8,
    }
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const {open, handleClose, inputCupsSelected, setInputCupsSelected, exampleSelected, setExampleSelected, newCounter } = props;
  const [valueText, setValueText] = useState('');
  const loader = useSelector(state => state.globals.loader);

  return (
    <div>
      <Dialog fullScreen={fullScreen} fullWidth maxWidth={"sm"} open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="primary" onClick={handleClose} aria-label="close">
              <CloseIcon className={classes.closeIcon}/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {exampleSelected ? 'Examples' : 'Create counter'}
            </Typography>
            {!exampleSelected && <GeneralButton clase={inputCupsSelected ? 'btnSaveModalActive' :'btnSaveModalInactive'} action={newCounter} actionName={valueText}> Save</GeneralButton>}
          </Toolbar>
        </AppBar>
        <div style={{padding: '1rem', minHeight: 500}}>
          {exampleSelected ? 
            (<Example/>) : 
            ( <>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                  spacing={4}
                >
                  <Grid item xs={12} style={{width:'100%', position: 'relative'}}>
                    <form onSubmit={(e)=> {e.preventDefault(); newCounter(valueText)}}>
                      <TextField 
                        value={valueText}
                        onChange={(e)=>setValueText(e.target.value)}
                        className={classes.inputCups} 
                        placeholder="Cups of coffee" 
                        variant="outlined" 
                        onFocus={()=>setInputCupsSelected(true)}
                        onBlur={()=>setInputCupsSelected(valueText.length === 0 && inputCupsSelected ? false : true)}
                      />
                    </form>
                  </Grid>
                  <Grid item xs={12}>
                    <span className={classes.textExample}>Give it a name. Creative block? See <span className={classes.textLink} onClick={()=>setExampleSelected(true)}> examples</span>.</span>
                    {loader &&
                    (<div className={'containerLoader'}>
                      <Loader/>
                    </div>
                    )}
                  </Grid>
                </Grid>
              </>
            )}
        </div>
      </Dialog>
    </div>
  );
}
