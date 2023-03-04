import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";

//In the App component, we are using the useSelector hook from react-redux to get the current mode from the store. We are also using the useMemo hook to create a theme object based on the current mode. We are then wrapping the CssBaseline component with the ThemeProvider component from @mui/material. This is how we are applying the theme to the entire application.
function App() {

  const mode=useSelector((state)=>state.global.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
