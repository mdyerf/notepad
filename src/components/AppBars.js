import React, { useState } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import appBarListItems from "../constants/appBarListItems";

const drawerWidth = 240;

function AppBars(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {appBarListItems.map((li, index) => (
            <ListItem
              key={index}
              button
              onClick={() => {
                li.onClick(dispatch);
                setOpen(false);
              }}
            >
              <ListItemIcon>{li.Icon}</ListItemIcon>
              <ListItemText primary={li.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default AppBars;
