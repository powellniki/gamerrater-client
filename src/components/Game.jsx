import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Game = () => {
    const [gameDetails, setGameDetails] = useState([])
    const {gameId} = useParams()

    const fetchGameDetailsFromAPI = async () => {
        const response = await fetch(`http://localhost:8000/games/${gameId}`,
            {
                headers: {
                  Authorization: `Token ${JSON.parse(localStorage.getItem('rock_token')).token}`
                }
            })
        const game = await response.json()
        setGameDetails(game)
    }

    const fetchCategoriesByGameId = async = () => {

    }
    
    useEffect(() => {
        fetchGameDetailsFromAPI() 
    },[])

    return (
        <main className='text-slate-900 pl-10 pr-10'>
            <div>
                <h3>Game: {gameDetails.title}</h3>
                <div>Designer: {gameDetails.designer}</div>
                <div>Release: {gameDetails.release_year}</div>
                <div>Number of Players: {gameDetails.number_players}</div>
                <div>Game Time: {gameDetails.play_time}</div>
                <div>Age Recommendation: {gameDetails.age_rec}</div>
                <div>Categories:</div>
            </div>
        </main>
    )
}