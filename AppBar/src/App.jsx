import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route exact path="/about" render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
};
export default App;
