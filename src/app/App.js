import React from "react";
// new lines from here

import { Route, Routes, Navigate } from "react-router-dom";
import "./css/app.css";
import NotFound from "../components/NotFound";
import AuthRouter from "../Controller/AuthRouter";
import DashboardForm from "../Views/demo/Dasboard/dasboard.Component";
import Insurance from "../Views/Report/Insurance";

function App() {
  return (
    // <LoginFeature></LoginFeature>
    // <Router>
    
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<AuthRouter />} exact />
      <Route path="/dashboard" element={<DashboardForm />}  />
      <Route path="/insurance" element={<Insurance />}  />

      <Route path="*" element={<NotFound />} />
    </Routes>

    // </Router>
  );
}

export default App;
