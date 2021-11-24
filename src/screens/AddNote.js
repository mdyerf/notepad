import { Button, Snackbar, TextField } from "@material-ui/core";
import { ChevronLeft, NoteAdd } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../constants/routes";
import { useSelector } from "react-redux";
import { addNote, editNote, getNoteById } from "../store/notes";
import Alert from "@material-ui/lab/Alert";

function AddNote(props) {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [toastOpen, setToastOpen] = useState(false);
  const [error, setError] = useState(false);

  const note = useSelector(getNoteById(id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setTitle(note.title);
      setText(note.text);
    }
  }, [id, note]);

  return (
    <>
      <Link to={routes.Home}>
        <Button
          style={{ margin: 20 }}
          variant="contained"
          color="secondary"
          startIcon={<ChevronLeft />}
        >
          Back
        </Button>
      </Link>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (title.trim() === "" || text.trim() === "") {
            setToastOpen(false);
            setError(true);
            return;
          }
          if (id) dispatch(editNote({ ...note, title, text }));
          else dispatch(addNote({ title, text }));
          setText("");
          setTitle("");
          setError(false);
          setToastOpen(true);
        }}
      >
        <TextField
          style={{ margin: 10, width: "50%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="title"
          variant="outlined"
        />
        <TextField
          style={{ margin: 10, width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="text"
          variant="outlined"
        />
        <Button
          style={{ width: "fit-content", margin: 10 }}
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<NoteAdd />}
        >
          Submit
        </Button>
      </form>
      <Snackbar open={toastOpen} autoHideDuration={3000}>
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Note Added
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={3000}>
        <Alert
          onClose={() => setError(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Please fill all inputs
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddNote;
