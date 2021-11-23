import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./constants/routes";
import AddNote from "./screens/AddNote";
import Notes from "./screens/Notes";
import "./App.css";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <BrowserRouter>
        <Routes>
          <Route exact path={routes.Home} element={<Notes />} />
          <Route path={routes.AddNote} element={<AddNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
