import { useState } from "react"


export const AddGameForm = () => {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [designer, setDesigner] = useState()
    const [year, setYear] = useState()
    const [players, setPlayers] = useState()
    const [playTime, setPlayTime] = useState()
    const [ageRec, setAgeRec] = useState()

    return (
        <main>
            <h3 className='text-4xl'>Lets Register a New Game!</h3>
            <form>
                <fieldset>
                    <legend>Title</legend>
                    <input
                        placeholder="name of the game"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Description</legend>
                    <textarea
                        placeholder="write a short description of the game"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </fieldset>
                <fieldset>
                    <legend>Designer</legend>
                    <input
                        placeholder="who designed the game"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setDesigner(e.target.value)}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Year Released</legend>
                    <input
                        placeholder="ex. 2001"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setYear(e.target.value)}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Number of Players</legend>
                    <input
                        placeholder="ex. 2-4"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPlayers(e.target.value)}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Play Time</legend>
                    <input
                        placeholder="ex. 30-90 minutes"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPlayTime(e.target.value)}
                    ></input>
                </fieldset>
                <fieldset>
                    <legend>Age Recommendation</legend>
                    <input
                        placeholder="ex. 12+"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </fieldset>
                <fieldset>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">REGISTER</button>
                </fieldset>
            </form>
        </main>
    )
}