import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

function Notes(props) {
  return (
    <>
      <div style={{ borderTop: "1px solid black" }}>Here are your notes</div>
      <Link to={routes.AddNote}>
        <Button>+</Button>
      </Link>
    </>
  );
}

export default Notes;
