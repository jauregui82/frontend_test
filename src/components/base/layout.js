import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  }
}));

export const Layout = props => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        {props.children}
      </Container>
    </>
  );
};
