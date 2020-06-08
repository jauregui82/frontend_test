import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  cell: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: 67,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(248, 148, 5, 0.06)"
    }
  },
  cellActive: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: 67,
    boxShadow: "none",
    backgroundColor: "transparent",
    margin: "auto",
    borderRadius: 6,
    position: "relative"
  },
  bgActive: {
    width: "97%",
    height: 53,
    backgroundColor: "rgba(248, 148, 5, 0.2)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "6px",
    zIndex: 0
  },
  contentAction: {
    display: "flex"
  },
  label: {
    fontSize: 17,
    letterSpacing: "0.02em",
    flex: 1,
    padding: "23px 0px 23px 24px",
    cursor: "pointer",
    zIndex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  numberActive: {
    fontWeight: "bold"
  }
}));

export const CounterCell = props => {
  const classes = useStyles();
  const {
    textCell,
    clase,
    selectedCell,
    count,
    handleCount,
    idCounter
  } = props;
  const btnInc = classNames(classes.iconButton, "btnInc");
  const btnDec = classNames(classes.iconButton, "btnDec");
  const btnContent = classNames(classes[clase], "btnContents");
  return (
    <Paper component="form" className={btnContent}>
      <span className={clase === "cellActive" ? classes.bgActive : ""} />
      <label
        className={classes.label}
        onClick={() => {
          // clase !== "cellActive" && selectedCell(idCounter);
          selectedCell(idCounter);
        }}
      >
        {textCell}
      </label>
      <div className={classes.contentAction}>
        <IconButton
          onClick={() => {
            handleCount(idCounter, textCell, "dec");
          }}
          disabled={count === 0}
          className={btnDec}
          aria-label="menu"
        >
          <RemoveIcon color={count > 0 ? "primary" : "disabled"} />
        </IconButton>
        <p className={classes.numberActive}>{count}</p>
        <IconButton
          onClick={() => handleCount(idCounter, textCell, "inc")}
          className={btnInc}
          aria-label="menu"
        >
          <AddIcon color="primary" />
        </IconButton>
      </div>
    </Paper>
  );
};
