import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import CreateNewPassword from './pages/CreateNewPassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Dashboard/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        <Route path="/new-password" element={<CreateNewPassword/>} />
      </Routes>
    </>
  )
}

export default App
