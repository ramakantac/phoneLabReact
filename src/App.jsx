import React from 'react'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App