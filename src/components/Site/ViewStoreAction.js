import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Divider } from "@material-ui/core";
import { GeneralButton } from "../Button/Buton";
import AddIcon from "@material-ui/icons/Add";
import { ReactComponent as IconTrash } from "../../assets/IconTrash.svg";
import { ReactComponent as IconCopy } from "../../assets/IconCopy.svg";
import { Copy } from "../Copy/Copy";
import { useSelector, useDispatch } from "react-redux";
import { modalCopy } from "../../redux/action/globalsActions";

const useStyles = makeStyles(theme => ({
  footerContainer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    left: "50%",
    transform: "translate(-50%, 0)",
    backgroundColor: "#fff",
    zIndex: 1
  },
  footerContent: {
    position: "relative",
    bottom: 0,
    width: "100%",
    padding: "0 2rem",
    left: "50%",
    transform: "translate(-50%, 0)",
    maxWidth: 570
  }
}));

export const ViewStoreAction = props => {
  const classes = useStyles();
  const { openModal, dataCounterSelected, deleteCounter, copySelected } = props;
  const globals = useSelector(state => state.globals);
  const dispatch = useDispatch();
  const openCopy = globals.modalCopy;
  const setOpenCopy = show => dispatch(modalCopy(show));
  return (
    <>
      <div className={classes.footerContainer}>
        <Divider />
        <div className={classes.footerContent}>
          <Grid container justify="space-between" style={{ padding: "16px 0" }}>
            <Grid item>
              {Object.keys(dataCounterSelected).length > 0 && (
                <Grid container spacing={3}>
                  <Grid item>
                    <GeneralButton
                      clase={"btnSmallWhite"}
                      action={deleteCounter}
                      actionName={""}
                    >
                      <IconTrash />
                    </GeneralButton>
                  </Grid>
                  <Grid item>
                    <div style={{ position: "relative" }}>
                      {openCopy && (
                        <Copy
                          dataCounterSelected={dataCounterSelected}
                          copySelected={copySelected}
                          setOpenCopy={setOpenCopy}
                        />
                      )}
                      <GeneralButton
                        clase={"btnSmallWhite"}
                        action={setOpenCopy}
                        actionName={openCopy ? false : true}
                      >
                        <IconCopy />
                      </GeneralButton>
                    </div>
                  </Grid>
                </Grid>
              )}
            </Grid>

            <Grid item>
              <GeneralButton
                clase={"btnSmall"}
                action={openModal}
                actionName={"add"}
              >
                <AddIcon />
              </GeneralButton>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
