import React, { useEffect, useState } from "react";
import {
  // AppBar,
  // Drawer,
  // IconButton,
  // Typography,
  // CssBaseline,
  // Divider,
  // ListItemButton,
  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  Grid,
  Box,
  Toolbar,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import ChecklistIcon from '@mui/icons-material/Checklist';
// import SettingsIcon from '@mui/icons-material/Settings';
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import { Link } from "react-router-dom";

const drawerWidth = 240;

function TaskTrackerApp() {
  const [allTask, setAllTask] = useState([]);
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setAllTask(storedTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...allTask, task];
    setAllTask(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = allTask.filter((_, i) => i !== index);
    setAllTask(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // const handleDrawerClose = () => {
  //   setIsClosing(true);
  //   setMobileOpen(false);
  // };

  // const handleDrawerTransitionEnd = () => {
  //   setIsClosing(false);
  // };

  // const handleDrawerToggle = () => {
  //   if (!isClosing) {
  //     setMobileOpen(!mobileOpen);
  //   }
  // };

  // const drawer = (
  //   <div>
  //     <Toolbar />
  //     <Divider />
  //     <List>
  //         <ListItem >
  //           <ListItemButton component={Link} to="/" >
  //             <ListItemIcon>
  //               <FormatListBulletedIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Task List"} />
  //           </ListItemButton>
  //         </ListItem>
  //         <ListItem >
  //           <ListItemButton component={Link} to="/completed" >
  //             <ListItemIcon>
  //               <ChecklistIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Completed Tasks"} />
  //           </ListItemButton>
  //         </ListItem>
  //         <ListItem >
  //           <ListItemButton component={Link} to="/setting" >
  //             <ListItemIcon>
  //               <SettingsIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Setting"} />
  //           </ListItemButton>
  //         </ListItem>
  //     </List>
  //   </div>
  // );

  return (

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
    // </Box>
  );
}

export default TaskTrackerApp;
