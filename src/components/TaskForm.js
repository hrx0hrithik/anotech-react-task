import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ name: taskName, description: taskDescription, isChecked: false });
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <Box my={4}>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} display={"flex"}>
        <Grid item xs={12}>
          <TextField
            label="Task Name"
            variant="outlined"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            sx={{ maxWidth: "600px", width: "100%"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Task Description"
            variant="outlined"
            multiline
            rows={4}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            sx={{ maxWidth: "600px", width: "100%"}}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
    </Box>
  );
}

export default TaskForm;
