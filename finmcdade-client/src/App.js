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

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let theRoutes;

  if (token) {
    theRoutes = (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
  if (!token) {
    theRoutes = (
      <Routes>
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
