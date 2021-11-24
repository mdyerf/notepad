import React from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { limitString } from "../logic/string";
import { Link } from "react-router-dom";
import routes from "../constants/routes";
import { getNotes, switchStar } from "../store/notes";
import { useSelector } from "react-redux";
import "../App.css";
import { useDispatch } from "react-redux";

function Notes(props) {
  const notes = useSelector(getNotes);
  const dispatch = useDispatch();

  function handleSwitchStar(id) {
    dispatch(switchStar({ id }));
  }

  return (
    <>
      <Grid
        wrap="wrap"
        style={{ margin: "auto", width: "100%" }}
        spacing={5}
        container
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="stretch"
      >
        {notes &&
          notes.map((note) => (
            <Grid key={note.id} item>
              <div className="note-card">
                {note.isFavorite ? (
                  <StarIcon
                    style={{ fill: "gold" }}
                    onClick={() => {
                      handleSwitchStar(note.id);
                    }}
                  />
                ) : (
                  <StarBorderIcon
                    onClick={() => {
                      handleSwitchStar(note.id);
                    }}
                  />
                )}
                <h3>{note.title.toUpperCase()}</h3>
                <p>{limitString(note.text)}</p>
              </div>
            </Grid>
          ))}
      </Grid>

      <Link to={routes.AddNote}>
        <Button
          variant="contained"
          color="secondary"
          style={{
            position: "fixed",
            alignSelf: "center",
            bottom: 30,
            left: "50%",
            fontWeight: "bold",
            borderRadius: 20,
          }}
        >
          +
        </Button>
      </Link>
    </>
  );
}

export default Notes;
