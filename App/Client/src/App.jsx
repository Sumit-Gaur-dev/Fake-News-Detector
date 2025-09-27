import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (
    !token &&
    location.pathname !== "/login" &&
    location.pathname !== "/signup"
  ) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
