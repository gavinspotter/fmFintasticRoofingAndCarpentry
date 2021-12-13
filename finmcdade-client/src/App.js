import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";

import { useAuth } from "./shared/hooks/auth-hook";

import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const { token, login, logout, userId } = useAuth();

  let theRoutes;

  if (token) {
    theRoutes = (
      <Routes>
        <Route path="/dashboard" />
      </Routes>
    );
  }
  if (!token) {
    <Routes>
      <Route path="/" />
      <Route path="*" />
    </Routes>;
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
      <Router>{theRoutes}</Router>
    </AuthContext.Provider>
  );
};

export default App;
