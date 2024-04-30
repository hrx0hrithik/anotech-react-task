import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TaskTrackerApp from "./TaskTrackerApp";
import Setting from "./Setting";
import CompletedTask from "./CompletedTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<TaskTrackerApp />} />
          <Route path="/completed" element={<CompletedTask />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
