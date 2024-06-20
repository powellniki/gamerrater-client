import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./auth/Authorized.jsx"
import { Login } from "./auth/Login.jsx"
import { Register } from './auth/Register.jsx'
import { Home } from "./auth/Home.jsx"
import { AllGames } from "./AllGames.jsx"
import { Game } from './Game.jsx'
import { AddGameForm } from './AddGameForm.jsx'
import { ReviewGame } from './ReviewForm.jsx'


export const ApplicationViews = () => {


    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<AllGames />} />
                <Route path="/games/:gameId" element={<Game />} />
                <Route path="/games/new" element={<AddGameForm />} />
                <Route path="/game/:gameId/review" element={<ReviewGame />} />
            </Route>
        </Routes>
    </BrowserRouter>
}