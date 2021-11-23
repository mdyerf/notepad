import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

function AddNote(props) {
  return (
    <>
      <div>Adding a new note</div>
      <Link to={routes.Home}>
        <Button>Back</Button>
      </Link>
    </>
  );
}

export default AddNote;
