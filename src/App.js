import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TaskTrackerApp from "./TaskTrackerApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskTrackerApp />} />
        <Route path="/completed" element={<TaskTrackerApp />} />
        <Route path="/setting" element={<TaskTrackerApp />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
