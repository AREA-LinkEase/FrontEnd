import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import { Navigate } from "react-router-dom/dist";
import RegisterPage from "./pages/register/RegisterPage";

const App = () => {
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage ButtonText="Continue" rightIconSrcOff="EyeOff" rightIconSrcOn="Eye" Title="What is your Email ?" InputPlaceholder="Email" inputType="email" leftIconSrc="User"/>} />
          <Route
            path="*" element={<Navigate to="/" />}
          />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
