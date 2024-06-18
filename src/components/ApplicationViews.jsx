import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./auth/Authorized.jsx"
import { Login } from "./auth/Login.jsx"
import { Register } from './auth/Register.jsx'
import { Home } from "./auth/Home.jsx"


export const ApplicationViews = () => {


    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />

            </Route>
        </Routes>
    </BrowserRouter>
}