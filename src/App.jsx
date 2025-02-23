import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import store from "./useStore.js";

function App() {
    const isAuthenticated = store((state) => state.isAuthenticated);
      return (
        <Routes>
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login/>
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard/>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      )
}

export default App