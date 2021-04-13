import React from "react";
import Home from "./Home";
import Drawer from "./Drawer";
import { Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Contact from "./Contact";
import About from "./About";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Drawer className={classes.container} />

      <Switch>
        {/* <Route
          exact
          path="/home/:page"
          render={(props) => <Home {...props} />}
        /> */}
        <Route exact path="/home" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        {/* <Redirect exact from="/home" to="/home/about" /> */}
      </Switch>
    </div>
  );
};

export default App;
