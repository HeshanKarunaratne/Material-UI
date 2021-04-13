import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Contact from "./Contact";
import About from "./About";

const Home = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const indexToTabName = {
    about: 0,
    contact: 1,
  };
  const tabToIndex = {
    0: "about",
    1: "contact",
  };
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="About" />
          <Tab label="Contact US" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Contact />}
    </div>
  );
};

export default Home;
