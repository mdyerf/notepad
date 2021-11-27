import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import routes from "./constants/routes";
import AddNote from "./screens/AddNote";
import Notes from "./screens/Notes";
import { Provider } from "react-redux";
import store from "./store/store";
import AppLayout from "./containers/AppLayout";

function App() {
  
  return (
    <Provider store={store}>
      <AppLayout>
        <BrowserRouter>
          <Routes>
            <Route exact path={routes.Home} element={<Notes />} />
            <Route path={routes.AddNote} element={<AddNote />} />
            <Route path={`${routes.AddNote}/:id`} element={<AddNote />} />
          </Routes>
        </BrowserRouter>
      </AppLayout>
    </Provider>
  );
}

export default App;
