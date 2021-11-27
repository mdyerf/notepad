import React from "react";
import AppBars from "../components/AppBars";
import Toast from "../components/Toast";

function AppLayout({ children }) {
  return (
    <>
      <AppBars />
      <div style={{ marginTop: 63 }}>{children}</div>
      <Toast />
    </>
  );
}

export default AppLayout;
