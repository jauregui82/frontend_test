import React from "react";
import { Grid } from "@material-ui/core";
import { ReactComponent as Icon } from "../assets/Icon.svg";
import { makeStyles } from "@material-ui/styles";
import { GeneralButton } from "./Button/Buton";
import { Link } from "react-router-dom";
import { Layout } from "./base/layout";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  }
}));

export const Home = props => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Grid
          className={classes.root}
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <Icon />
          </Grid>
          <Grid item>
            <p className="largeTitle"> Welcome to Counters </p>
            <p className="subTitle">
              <span>Capture cups of lattes, frapuccinos,</span> <br />{" "}
              <span>or anything else that can be counted.</span>
            </p>
          </Grid>
          <Grid item>
            <Link to={"/site"} style={{ textDecoration: "none" }}>
              <GeneralButton> Get started </GeneralButton>
            </Link>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};
