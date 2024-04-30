import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Grid,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

function TaskList({ allTask, deleteTask }) {
    console.log(allTask)
  return (
    <>
      {allTask.length !== 0 ? (
        <List>
          <Grid container spacing={2} column={12}>
          {allTask.map((task, index) => (
            <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, display: "flex" }} key={index}>
              <ListItemText primary={task.name} secondary={task.description} />
                <IconButton onClick={() => deleteTask(index)} edge="end">
                  <Delete />
                </IconButton>
            </Paper>
            </Grid>
          ))}
          </Grid>
        </List>
      ) : (
        <div>
            No Task
        </div>
      )}
    </>
  );
}

export default TaskList;
