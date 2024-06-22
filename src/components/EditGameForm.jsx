import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const EditGameForm = () => {
    const { gameId } = useParams()
    const initialGameState = {
        title: "",
        description: "",
        designer: "",
        release_year: 0,
        number_players: "",
        play_time: "",
        age_rec: ""
    }

    const [game, setGame] = useState(initialGameState)
    const navigate = useNavigate()

    const fetchGameDetailsFromAPI = async () => {
        const response = await fetch(`http://localhost:8000/games/${gameId}`,
            {
                headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                "Content-Type": "application/json"
                }
            })
        const gameData = await response.json()
        setGame(gameData)
    }

    useEffect(() => {
        fetchGameDetailsFromAPI()
    },[])

    const handleUpdateGame = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:8000/games/${gameId}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(game)
            });
            navigate('/games');
        } catch (error) {
            console.error('Error updating game:', error);
        }
    };
    

    return (
        <main>
            <h3 className='text-4xl'>Lets Edit a New Game!</h3>
            <form>
                <fieldset>
                    <legend>Title</legend>
                    <input
                        value={game.title}
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.title = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Description</legend>
                    <textarea
                        value={game.description}
                        placeholder="write a short description of the game"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.description = e.target.value
                            setGame(copy)
                        }}
                    ></textarea>
                </fieldset>
                <fieldset>
                    <legend>Designer</legend>
                    <input
                        value={game.designer}
                        placeholder="who designed the game"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.designer = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Year Released</legend>
                    <input
                        value={game.release_year}
                        placeholder="ex. 2001"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.release_year = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Number of Players</legend>
                    <input
                        value={game.number_players}
                        placeholder="ex. 2-4"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.number_players = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Play Time</legend>
                    <input
                        value={game.play_time}
                        placeholder="ex. 30-90 minutes"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.play_time = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Age Recommendation</legend>
                    <input
                        value={game.age_rec}
                        placeholder="ex. 12+"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.age_rec = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <button
                        onClick={handleUpdateGame}
                        type="submit" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SAVE</button>
                </fieldset>
            </form>
        </main>
    )
}