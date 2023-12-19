import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterPage from './pages/register/RegisterPage';
import AccueilPage from './pages/accueil/AccueilPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/home" element={
            <ProtectedRoute>
              <AccueilPage/>
            </ProtectedRoute>
        }/>
        <Route
          path="/register"
          element={
            <RegisterPage
              ButtonText="Continue"
              rightIconSrcOff="EyeOff"
              rightIconSrcOn="Eye"
              Title="What is your Email ?"
              InputPlaceholder="Email"
              inputType="email"
              leftIconSrc="User"
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
