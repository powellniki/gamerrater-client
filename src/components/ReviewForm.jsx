import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const ReviewGame = () => {
    const { gameId } = useParams()
    const navigate = useNavigate()

    const initialReviewState = {
        game: gameId,
        review: ""
    }
    const [review, setReview] = useState(initialReviewState)
    

    const handleSubmitReview = () => {
        fetch('http://localhost:8000/reviews', {
            method: "POST",
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
        navigate(`/games/${gameId}`)
    }

    return (
        <main>
            <form>
                <fieldset>
                    <legend>Leave a review...</legend>
                    <textarea
                        placeholder="type a review..."
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => {
                            const copy = {...review}
                            copy.review = e.target.value
                            setReview(copy)
                        }}
                    ></textarea>
                </fieldset>
                <fieldset>
                    <button 
                        type="submit"
                        onClick={handleSubmitReview}
                        className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>SUBMIT</button>
                </fieldset>
            </form>
        </main>
    )
}