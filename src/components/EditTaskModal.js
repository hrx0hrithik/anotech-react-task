import React, { useState } from 'react';
import { Modal, Grid, TextField, Button, Box } from '@mui/material';

function EditTaskModal({ isOpen, onClose, task, updateTask }) {
  const [editedTaskName, setEditedTaskName] = useState(task.name);
  const [editedTaskDescription, setEditedTaskDescription] = useState(task.description);

  const handleUpdateTask = () => {
    updateTask({ ...task, name: editedTaskName, description: editedTaskDescription });
    console.log("updated")
    onClose();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (task &&
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Task Name"
              variant="outlined"
              value={editedTaskName}
              onChange={(e) => setEditedTaskName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Task Description"
              variant="outlined"
              value={editedTaskDescription}
              onChange={(e) => setEditedTaskDescription(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleUpdateTask} variant="contained" color="primary">
              Update Task
            </Button>
            <Button sx={{ ml: 2}} onClick={onClose} variant="contained" color="primary">
              Cancle
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default EditTaskModal;
