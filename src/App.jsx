import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/auth/Home.jsx"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import './App.css'

export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route element={<Authorized />}/>
          <Route path="/" element={<Home />}/>

      </Routes>
    </BrowserRouter>
  )
}