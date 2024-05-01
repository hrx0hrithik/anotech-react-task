import React, { useEffect, useState } from "react";
import { Grid, Box, Toolbar } from "@mui/material";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const drawerWidth = 240;

function TaskTrackerApp({ isChecked, setIsChecked }) {
  const [allTask, setAllTask] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setAllTask(storedTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...allTask, task];
    setAllTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = allTask.filter((_, i) => i !== index);
    setAllTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = allTask.map((task) =>
      task === editedTask ? { ...task, ...updatedTask } : task
    );
    setAllTask(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditModalOpen(false);
  };

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
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        sx={{ marginX: "auto" }}
      >
        <TaskForm addTask={addTask} />
        <TaskList
          deleteTask={deleteTask}
          allTask={allTask}
          updateTask={updateTask}
          setEditModalOpen={setEditModalOpen}
          editModalOpen={editModalOpen}
          editedTask={editedTask}
          setEditedTask={setEditedTask}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </Grid>
    </Box>
  );
}

export default TaskTrackerApp;
