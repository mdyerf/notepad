import React from "react";
import { useState } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ViewListIcon from "@material-ui/icons/ViewList";
import StarIcon from "@material-ui/icons/Star";
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
import { showAll, showFavorites } from "../store/notes";

const drawerWidth = 240;

function SideBar(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <AppBar position="fixed" open={open}>
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
          <ListItem
            button
            onClick={() => {
              dispatch(showAll());
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <ViewListIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="All Notes" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              dispatch(showFavorites());
              setOpen(false);
            }}
          >
            <ListItemIcon>
              <StarIcon style={{ fill: "gold" }} />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default SideBar;
