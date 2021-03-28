import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    color: "red",
    [theme.breakpoints.up("sm")]: {
      color: "blue",
    },
  },
}));
const CoolButton = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  console.log("theme", theme);
  console.log("theme->", theme.palette.primary);
  return (
    <Button fullWidth className={classes.buttonStyle}>
      Small button
    </Button>
  );
};

export default CoolButton;
