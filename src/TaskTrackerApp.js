import React, { useState } from "react";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function TaskTrackerApp() {
  const [allTask, setAllTask] = useState([]);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <h3>Task Tracker</h3>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* SideBar */}
        </Grid>
        <Grid item xs={8}>
          <TaskList />
          <TaskForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default TaskTrackerApp;
