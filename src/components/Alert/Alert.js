import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { modalAlert } from "../../redux/action/globalsActions";
import { GeneralButton } from "../Button/Buton";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 600,
    fontSize: 22,
    textAlign: "center",
    color: "#000000"
  },
  subTitle: {
    fontSize: 17,
    textAlign: "center",
    color: "#4A4A4A"
  }
}));

export const Alert = props => {
  const classes = useStyles();
  const globals = useSelector(state => state.globals);
  const open = globals.modalAlert;
  const dispatch = useDispatch();

  const handleCancel = () => {
    if (Object.keys(globals.contentAlert.actionCancel).length > 1) {
      props[globals.contentAlert.actionCancel]();
    }
    dispatch(modalAlert(false));
  };
  const handleAction = () => {
    if (Object.keys(globals.contentAlert.actionAcept).length > 1) {
      props[globals.contentAlert.actionAcept]();
    }
    dispatch(modalAlert(false));
  };

  return (
    <div>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle className={classes.title}>
          {globals.contentAlert.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.subTitle}>
            {globals.contentAlert.subTitle}
          </DialogContentText>
          <>
            <Grid container spacing={2} justify="center">
              {globals.contentAlert.actionCancel === "none" ? (
                ""
              ) : (
                <Grid item>
                  <GeneralButton
                    clase={globals.contentAlert.claseCanel}
                    action={handleCancel}
                    actionName={""}
                  >
                    {globals.contentAlert.textCancel}
                  </GeneralButton>
                </Grid>
              )}
              <Grid item>
                <GeneralButton
                  clase={globals.contentAlert.claseAcept}
                  action={handleAction}
                  actionName={globals.contentAlert.actionNameAcept}
                >
                  {globals.contentAlert.textAcept}
                </GeneralButton>
              </Grid>
            </Grid>
          </>
        </DialogContent>
      </Dialog>
    </div>
  );
};
