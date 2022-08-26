import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <Router>
      <StyledEngineProvider injectFirst>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </StyledEngineProvider>
    </Router>
  );
}

export default App;
