import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import TaskTrackerApp from "./TaskTrackerApp";
import Setting from "./Setting";
import CompletedTask from "./CompletedTask";
import NewDrawer from "./components/NewDrawer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const drawerWidth = 240;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
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
          <NewDrawer
            handleDrawerClose={handleDrawerClose}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            drawerWidth={drawerWidth}
            mobileOpen={mobileOpen}
          />
          <Routes>
            <Route path="/" element={<TaskTrackerApp />} />
            <Route path="/completed" element={<CompletedTask />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
