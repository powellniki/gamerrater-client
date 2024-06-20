import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const AllGames = () => {
  const [allGames, setAllGames] = useState([])


  const fetchGamesFromAPI = async () => {
    const response = await fetch('http://localhost:8000/games',
      {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem('rock_token')).token}`
        }
      })
    const allGames = await response.json()
    setAllGames(allGames)
  }

  useEffect(() => {
    fetchGamesFromAPI() 
  },[])

  return (
      <main className='text-slate-900 pl-10 pr-10'>
        <h1 className='text-4xl'>Welcome to Gamer Rater</h1>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Game</button>
        </div>
        <div>
          {allGames.map(game => <div key={`game--${game.id}`}><Link to={`/games/${game.id}`}>{game.title}</Link></div>)}
        </div>
      </main>
  )
}

