import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const Game = () => {
    const [gameDetails, setGameDetails] = useState({})
    const [gameReviews, setGameReviews] = useState([])
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    const [averageRating, setAverageRating] = useState(0)
    const {gameId} = useParams()
    const [userRating, setUserRating] = useState({
            game: gameId,
            rating: 0
        })


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
    const fetchReviewsByGameId = async () => {
        const response = await fetch(`http://localhost:8000/reviews?game=${gameId}`,
            {
                headers: {
                  Authorization: `Token ${JSON.parse(localStorage.getItem('rock_token')).token}`
                }
            })
            const reviews = await response.json()
            setGameReviews(reviews)
    }
    
    
    const handleRating = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:8000/ratings`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userRating)
                });    
                navigate(`/games`)
            } catch (error) {
                console.error('Error submitting rating:', error);
        }
    };
                        
    useEffect(() => {
        fetchGameDetailsFromAPI()
        fetchReviewsByGameId()
        setRefresh(false)
    },[gameId, refresh])

    return (
        <main className='text-slate-900 pl-10 pr-10'>
            <div>
                <h3 className='text-2xl'>{gameDetails.title}</h3>
                <div>Average Rating: {gameDetails.average_rating}</div>
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
                <div>
                {
                    Array.isArray(gameReviews) && gameReviews.length === 1 
                        ? gameReviews[0].review 
                        : Array.isArray(gameReviews) 
                        ? gameReviews.map(game => <div key={game.id}>{game.review}</div>) 
                        : gameReviews.review
                    }
                </div>
                <div>
                    {gameDetails.is_owner ? <button onClick={() => navigate(`/game/${gameId}/edit`)} className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>EDIT GAME</button> : ""}
                </div>
                <div>
                    <select
                            value={userRating.rating}
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => {
                                const copy = {...userRating}
                                copy.rating = e.target.value,
                                setUserRating(copy)
                            }}
                        >
                            <option value="">Select Rating</option>
                            {[...Array(10)].map((_, i) => (
                                <option key={i+1} value={i+1}>{i+1}</option>
                            ))}
                    </select>
                    <button 
                        onClick={handleRating}
                        type="submit"
                        className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>SUBMIT RATING</button>
                </div>
            </div>
        </main>
    )
}