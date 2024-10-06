import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamDetails from "./pages/TeamDetails";
import LeadPage from "./pages/LeadPage";
import Calender from "./pages/Calender";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin-team" element={<TeamDetails />} />
          <Route path="/lead-page" element={<LeadPage />} />
          <Route path="/calender-page" element={<Calender />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
