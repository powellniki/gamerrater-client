import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const AddGameForm = () => {
    const initialGameState = {
        title: "",
        description: "",
        designer: "",
        year: 0,
        players: "",
        playTime: "",
        ageRec: ""
    }

    const [game, setGame] = useState(initialGameState)
    const navigate = useNavigate()

    // const [title, setTitle] = useState()
    // const [description, setDescription] = useState()
    // const [designer, setDesigner] = useState()
    // const [year, setYear] = useState()
    // const [players, setPlayers] = useState()
    // const [playTime, setPlayTime] = useState()
    // const [ageRec, setAgeRec] = useState()

    const handleRegisterNewGame = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:8000/games', {
            method: "POST",
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
        navigate('/games')
    }

    return (
        <main>
            <h3 className='text-4xl'>Lets Register a New Game!</h3>
            <form>
                <fieldset>
                    <legend>Title</legend>
                    <input
                        placeholder="name of the game"
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
                        placeholder="ex. 2001"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.year = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Number of Players</legend>
                    <input
                        placeholder="ex. 2-4"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.players = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Play Time</legend>
                    <input
                        placeholder="ex. 30-90 minutes"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.playTime = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Age Recommendation</legend>
                    <input
                        placeholder="ex. 12+"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...game}
                            copy.ageRec = e.target.value
                            setGame(copy)
                        }}
                    ></input>
                </fieldset>
                <fieldset>
                    <button type="submit" onClick={handleRegisterNewGame} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">REGISTER</button>
                </fieldset>
            </form>
        </main>
    )
}