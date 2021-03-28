import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  buttonStyles: {
    color: "red",
    border: "none",
  },
});
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.buttonStyles}>Small button</Button>
    </div>
  );
};

export default App;
