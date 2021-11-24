import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 7;
const slice = createSlice({
  name: "notes",
  initialState: {
    showFavoritesOnly: false,
    notes: [
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
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push({
        id: ++lastId,
        isFavorite: false,
        text: action.payload.text,
        title: action.payload.title,
      });
    },
    editNote: (state, action) => {
      state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;
        return note;
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    switchStar: (state, action) => {
      state.notes.map((note) => {
        if (note.id === action.payload.id) note.isFavorite = !note.isFavorite;
        return note;
      });
    },
    showAll: (state, action) => {
      state.showFavoritesOnly = false;
    },
    showFavorites: (state, action) => {
      state.showFavoritesOnly = true;
    },
  },
});

const getNotes = createSelector(
  (state) => state.notes,
  (state) => state.showFavoritesOnly,
  (notes, showFavoritesOnly) =>
    showFavoritesOnly ? notes.filter((note) => note.isFavorite) : notes
);
const getNoteById = (id) =>
  createSelector(
    (state) => state.notes,
    (notes) => notes.find((note) => note.id === id)
  );

export default slice.reducer;
export const {
  addNote,
  editNote,
  deleteNote,
  switchStar,
  showAll,
  showFavorites,
} = slice.actions;
export { getNoteById, getNotes };