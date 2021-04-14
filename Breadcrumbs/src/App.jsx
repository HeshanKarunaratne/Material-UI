import React from "react";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Breadcrumb from "./Breadcrumb";
const App = () => {
  return (
    <div>
      <Breadcrumb />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route
          exact
          path="/contact/home1"
          render={(props) => <Home1 {...props} />}
        />
        <Route
          exact
          path="/contact/home2"
          render={(props) => <Home2 {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
