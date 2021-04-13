import React, { useState } from "react";
import { Paper, Typography, Switch, Button, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const PaperCom = () => {
  const [darkmode, setdarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation="14">
        <Grid container direction="column">
          <Typography variant="h1">Hi paper</Typography>
          <Button variant="contained" color="primary">
            First Button
          </Button>
          <Button ariant="contained" color="secondary">
            Second Button
          </Button>
          <Switch checked={darkmode} onChange={() => setdarkMode(!darkmode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default PaperCom;
