import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const Game = () => {
    const [gameDetails, setGameDetails] = useState({})
    const navigate = useNavigate()
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
    
    useEffect(() => {
        fetchGameDetailsFromAPI() 
    },[])

    return (
        <main className='text-slate-900 pl-10 pr-10'>
            <div>
                <h3 className='text-2xl'>{gameDetails.title}</h3>
                <div>Designer: {gameDetails.designer}</div>
                <div>Release: {gameDetails.release_year}</div>
                <div>Number of Players: {gameDetails.number_players}</div>
                <div>Game Time: {gameDetails.play_time}</div>
                <div>Age Recommendation: {gameDetails.age_rec}</div>
                <div> 
                    Categories: 
                        {gameDetails.categories?.map(category => <li key={`category--${category.id}`}>{category.name}</li>)}
                </div>
                <div>
                    <button onClick={()=> navigate(`/game/${gameId}/review`)} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>REVIEW GAME</button>
                </div>
            </div>
        </main>
    )
}