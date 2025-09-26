import { useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Your page components
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

/**
 * This component acts as a gatekeeper for your private routes.
 * It checks if a token exists. If it does, it renders the child
 * routes (like /home). If not, it redirects to the login page.
 */
const PrivateRoutes = () => {
  let token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  // You no longer need to manage the token in App's state for this logic,
  // the PrivateRoutes component can check localStorage directly.

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* <Route element={<PrivateRoutes />}> */}
        <Route path="/home" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
