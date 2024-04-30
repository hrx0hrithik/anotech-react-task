import {
  List,
  ListItemText,
  IconButton,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import EditTaskModal from "./EditTaskModal";

function TaskList({
  allTask,
  deleteTask,
  updateTask,
  editModalOpen,
  setEditModalOpen,
  editedTask,
  setEditedTask,
}) {
  const openEditModal = (task) => {
    setEditedTask(task);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditedTask(null);
    setEditModalOpen(false);
  };

  return (
    <>
      {allTask.length !== 0 ? (
        <div>
          <List>
            <Grid container spacing={2} column={12}>
              {allTask.map((task, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper sx={{ p: 2, display: "flex" }}>
                    <ListItemText
                      sx={{ marginX: 2 }}
                      primary={task.name}
                      secondary={task.description}
                    />
                    <Box>
                      <IconButton onClick={() => openEditModal(task)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => deleteTask(index)}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </List>
          {editedTask && (
            <EditTaskModal
              isOpen={editModalOpen}
              onClose={closeEditModal}
              task={editedTask}
              updateTask={updateTask}
            />
          )}
        </div>
      ) : (
        <div>No Task</div>
      )}
    </>
  );
}

export default TaskList;
