import React from "react";
import { Button } from "@material-ui/core";

const Contact = (props) => {
  const { history } = props;

  return (
    <div>
      <Button onClick={() => history.push("/contact/home1")}>Home1</Button>
      <Button onClick={() => history.push("/contact/home2")}>Home2</Button>
      
    </div>
  );
};

export default Contact;
