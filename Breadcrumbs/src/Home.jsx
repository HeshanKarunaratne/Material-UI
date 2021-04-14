import { Button } from "@material-ui/core";
import React from "react";

const Home = (props) => {
  const { history } = props;

  return (
    <div>
      <Button onClick={() => history.push("/about")}>About</Button>
      <Button onClick={() => history.push("/contact")}>Contact</Button>
    </div>
  );
};

export default Home;
