import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (url) => {
    history.push(url);
    setAnchorEl(null);
  };

  const handleButtonClick = (url) => {
    history.push(url);
  };
  const menuItem = [
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>

          <div>
            {isMobile ? (
              <div>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItem.map((item) => {
                    const { title, url } = item;
                    return (
                      <MenuItem
                        key={title}
                        onClick={() => handleMenuClick(url)}
                      >
                        {title}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            ) : (
              <div className={classes.headerOptions}>
                {menuItem.map((item) => {
                  const { title, url } = item;
                  return (
                    <Button
                      variant="contained"
                      onClick={() => handleButtonClick(url)}
                    >
                      {title}
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
