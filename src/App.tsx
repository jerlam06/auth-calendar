import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoute";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/UserProfile/UserProfile";
import Calendar from "./pages/Calendar/Calendar";
import Signup from "./pages/Signup/Signup";
import useAuth from "./hooks/useAuth";
import AuthVerifier from "./components/AuthVerifier/AuthVerifier";
import PageLayout from "./components/PageLayout/PageLayout";
import "./App.css";

function App() {
  const [user, logOut] = useAuth();
  console.log("user:", user);

  return (
    <div className="App">
      <Router>
        <PageLayout user={user} logOut={logOut}>
          <Routes>
            <Route path="/" element={<Navigate to={user ? "/profile" : "/login"} replace />} />
            <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoutes user={user} />}>
              <Route path="/profile" element={<UserProfile user={user} />} />
              <Route path="/calendar" element={<Calendar />} />
            </Route>
          </Routes>
          <AuthVerifier user={user} logOut={logOut} />
        </PageLayout>
      </Router>
    </div>
  );
}

export default App;
