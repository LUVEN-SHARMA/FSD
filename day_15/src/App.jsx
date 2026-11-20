import React from 'react'
import Login from './Components/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
const App = () => {
  const user ={
    name: "Luven",
    email: "luven@gmail.com",
    password: "123456"
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App