import React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { limitString } from "../logic/string";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

function Notes(props) {
  function handleSwitchStar(id) {
    let newNotes = notes.map((n) => {
      if (n.id === id) n.isFavorite = !n.isFavorite;
      return n;
    });
    setNotes(newNotes);
  }
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "program",
      text: "this is a note that I have writen about my program",
      isFavorite: true,
    },
    {
      id: 2,
      title: "another note for program",
      text: "this is another note that I have writen about my program which is a bit longer",
      isFavorite: false,
    },
    {
      id: 3,
      title: "program",
      text: "this is a note that I have writen about my program",
      isFavorite: true,
    },
    {
      id: 4,
      title: "another note for program",
      text: "this is another note that I have writen about my program which is a bit longer this is another note that I have writen about my program which is a bit longer this is another note that I have writen about my program which is a bit longer this is another note that I have writen about my program which is a bit longer this is another note that I have writen about my program which is a bit longer",
      isFavorite: false,
    },
    {
      id: 5,
      title: "program",
      text: "this is a note that I have writen about my program",
      isFavorite: true,
    },
    {
      id: 6,
      title: "another note for program",
      text: "this is another note that I have writen about my program which is a bit longer",
      isFavorite: false,
    },
  ]);
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
        {notes.map((note) => (
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
