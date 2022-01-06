import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";

import { useAuth } from "./shared/hooks/auth-hook";

import { AuthContext } from "./shared/context/auth-context";
import Dashboard from "./admin/Dashboard";
import Home from "./homeShared/Home";
import Login from "./admin/Login";
import SidingProjectLook from "./homeShared/sidingProjects/SidingProjectLook";
import RoofingProjectLook from "./homeShared/roofingProjects/RoofingProjectLook";
import CarpentryProjectLook from "./homeShared/carpentryProjects/CarpentryProjectLook";
import Consultation from "./homeShared/Consultation";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let theRoutes;

  if (token) {
    theRoutes = (
      <Routes>
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/siding/:sId" element={<SidingProjectLook />} />
        <Route path="/roofing/:rId" element={<RoofingProjectLook />} />
        <Route path="/carpentry/:cId" element={<CarpentryProjectLook />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    );
  }
  if (!token) {
    theRoutes = (
      <Routes>
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/siding/:sId" element={<SidingProjectLook />} />
        <Route path="/roofing/:rId" element={<RoofingProjectLook />} />
        <Route path="/carpentry/:cId" element={<CarpentryProjectLook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      {/* {token && 
      <Router>
          {theRoutes}
      </Router>
      }

      {!token &&
      <Router>
          {theRoutes}
      </Router>
      } */}

      <Router>{theRoutes}</Router>
    </AuthContext.Provider>
  );
};

export default App;
