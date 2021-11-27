import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "toast",
  initialState: { text: "", type: "", open: false },
  reducers: {
    error: (state, action) => {
      state = { open: true, text: action.payload.message, type: "error" };
    },
    success: (state, action) => {
      state = { open: true, text: action.payload.message, type: "success" };
    },
    close: (state, action) => {
      state.open = false;
    },
  },
});

const getStatus = createSelector(
  (state) => state.toast,
  (state) => state
);

export default slice.reducer;
export const { error, success, close } = slice.actions;
export { getStatus };
