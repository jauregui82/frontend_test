import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
  baseButton: {
    textTransform: "inherit",
    width: "100%",
    maxWidth: 136,
    height: 40,
    display: "flex",
    border: 0,
    outline: "none",
    padding: "8px 24px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    borderRadius: 8,
    transition: "all .2s ease"
  },
  button: {
    color: "#fff",
    backgroundColor: "#FF9500",
    "&:hover": {
      boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
      backgroundColor: "rgba(255, 149, 0, 0.5)"
    }
  },
  disabled: {
    opacity: 0.5,
    cursor: "auto",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)"
  },
  btnWhite: {
    backgroundColor: "#FFFFFF"
  },
  btnSmall: {
    width: 74,
    height: 41,
    color: "#fff",
    backgroundColor: "#FF9500",
    "&:hover": {
      boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
      backgroundColor: "rgba(255, 149, 0, 0.5)"
    }
  },
  btnSmallWhite: {
    color: "#FF9500",
    fontWeight: 600,
    fontSize: 17,
    width: 74,
    height: 41,
    backgroundColor: "#FFFFFF"
  },
  btnSaveModalInactive: {
    width: 86,
    height: 40,
    color: "#fff",
    cursor: "inherit",
    backgroundColor: "rgba(255, 149, 0, 0.5)",
    "&:hover": {
      backgroundColor: "rgba(255, 149, 0, 0.5)"
    }
  },
  btnSaveModalActive: {
    width: 86,
    height: 40,
    color: "#fff",
    backgroundColor: "#FF9500",
    "&:hover": {
      boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
      backgroundColor: "rgba(255, 149, 0, 0.5)"
    }
  },
  btnAlertCancel: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF"
  },
  btnAlertDelete: {
    color: "#FF3B30",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.01)",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 8
  },
  btnAlertErrorCancel: {
    color: "#FF9500",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.01)",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 8
  }
}));

export const GeneralButton = props => {
  const classes = useStyles();
  const { children, clase, action, actionName } = props;
  const btnClass = classNames(
    classes.baseButton,
    clase ? classes[clase] : classes.button
  );
  return (
    <>
      <Button
        className={btnClass}
        onClick={() => {
          action && action(actionName && actionName);
        }}
      >
        {children}
      </Button>
    </>
  );
};
