import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles({
  drawers: {
    width: "150px",
  },
});
const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemList = [
    {
      text: "Inbox",
      icon: <InboxIcon />,
      onClick: () => history.push("/home"),
    },
    { text: "Starred", icon: "", onClick: () => history.push("/contact") },
    {
      text: "Send email",
      icon: <MailIcon />,
      onClick: () => history.push("/about"),
    },
    { text: "Drafts", icon: "", onClick: () => history.push("/home") },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawers}>
      <List>
        {itemList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
