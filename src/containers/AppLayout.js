import React from "react";
import AppBars from "../components/AppBars";

function AppLayout({ children }) {
  return (
    <>
      <AppBars />
      <div style={{ marginTop: 63 }}>{children}</div>
    </>
  );
}

export default AppLayout;
