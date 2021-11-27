import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { ChevronLeft, Delete, NoteAdd } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { useSelector } from "react-redux";
import { addNote, deleteNote, editNote, getNoteById } from "../store/notes";
import { error, success } from "../store/toast";
import messages from "../constants/messages";

function AddNote(props) {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const navigate = useNavigate();

  const note = useSelector(getNoteById(id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      if (note) {
        setTitle(note.title);
        setText(note.text);
      } else navigate(routes.Home);
    }
  }, [id, note, navigate]);

  function handleDelete() {
    dispatch(deleteNote({ id }));
    setDialogOpen(false);
    navigate(routes.Home);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || text.trim() === "") {
      dispatch(error({ message: messages.emptyField }));
      return;
    }
    if (id) {
      dispatch(editNote({ ...note, title, text }));
      dispatch(success({message: messages.noteEdited}));
      navigate(routes.Home);
    } else {
      dispatch(addNote({ title, text }));
      dispatch(success({message: messages.noteAdded}));
      navigate(routes.Home);
    }
    setText("");
    setTitle("");
  }

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
      {id && (
        <>
          <Button
            style={{ margin: 20 }}
            variant="contained"
            color="secondary"
            startIcon={<Delete />}
            onClick={() => setDialogOpen(true)}
          >
            Delete
          </Button>
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogActions>
              <Button
                onClick={handleDelete}
                variant="contained"
                color="secondary"
                startIcon={<Delete />}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setDialogOpen(false)}
                autoFocus
              >
                No
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          style={{ margin: 10, width: "50%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="title"
          variant="outlined"
        />
        <TextareaAutosize
          minRows={8}
          style={{ margin: 10, width: "100%", padding: 10 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="text"
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
    </>
  );
}

export default AddNote;
