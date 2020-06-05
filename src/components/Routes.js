import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { mainTheme } from "../MuiTheme";
import { Home } from "./Home";
import { Site } from "./Site";
//Style theme
const theme = createMuiTheme(mainTheme);
/**
 * Create Routes
 */
export const Routes = props => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <>
          <Switch>
            <Route key={0} path="/" component={Home} exact />
            <Route path="/site" component={Site} />
          </Switch>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
};
