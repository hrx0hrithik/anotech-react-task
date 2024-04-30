import * as React from "react";
import {
  Box,
  Divider,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

function NewDrawer({
  handleDrawerClose,
  handleDrawerTransitionEnd,
  drawerWidth,
  mobileOpen,
}) {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary={"Task List"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/completed">
            <ListItemIcon>
              <ChecklistIcon />
            </ListItemIcon>
            <ListItemText primary={"Completed Tasks"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/setting">
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
  );
}

export default NewDrawer;
