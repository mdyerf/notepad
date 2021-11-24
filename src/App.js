import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./constants/routes";
import AddNote from "./screens/AddNote";
import Notes from "./screens/Notes";
import SideBar from "./components/SideBar";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  
  return (
    <Provider store={store}>
      <SideBar />
      <div style={{ marginTop: 63 }}>
        <BrowserRouter>
          <Routes>
            <Route exact path={routes.Home} element={<Notes />} />
            <Route path={routes.AddNote} element={<AddNote />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
