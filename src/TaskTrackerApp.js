import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  ListItemButton,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function TaskTrackerApp() {
  const [allTask, setAllTask] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const addTask = (task) => {
    setAllTask([...allTask, task]);
    console.log("task added", task);
    console.log("all task", allTask);
  };

  const deleteTask = (index) => {
    const updatedTasks = allTask.filter((_, i) => i !== index);
    setAllTask(updatedTasks);
  };


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
          <ListItem >
            <ListItemButton component={Link} to="/" >
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary={"Task List"} />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component={Link} to="/completed" >
              <ListItemIcon>
                <ChecklistIcon />
              </ListItemIcon>
              <ListItemText primary={"Completed Tasks"} />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton component={Link} to="/setting" >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Setting"} />
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Task Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid container display={"flex"} flexDirection={"column"} sx={{ marginX: "auto" }}>
          <TaskForm addTask={addTask} />
          <TaskList deleteTask={deleteTask} allTask={allTask} />
        </Grid>
      </Box>
    </Box>
  );
}

export default TaskTrackerApp;
