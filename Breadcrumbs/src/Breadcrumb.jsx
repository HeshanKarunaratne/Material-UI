import React from "react";
import { withRouter } from "react-router-dom";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";

const Breadcrumb = (props) => {
  const { location, history } = props;
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link onClick={() => history.push("/")}>Home</Link>
      ) : (
        <Typography>Home</Typography>
      )}

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography>{name}</Typography>
        ) : (
          <Link onClick={() => history.push(routeTo)}>{name}</Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumb);
