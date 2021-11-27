import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { close, getStatus } from "../store/toast";

function Toast(props) {
  const select = useSelector(getStatus);
  const dispatch = useDispatch();

  return (
    <Snackbar open={select.open} autoHideDuration={2000}>
      <Alert
        onClose={() => dispatch(close())}
        severity={select.type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {select.text}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
