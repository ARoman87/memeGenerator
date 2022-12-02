import memesData from "../memesData"
import React from "react"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }



    return (
        <div>
            <div className="inputs">
                <input type="text" />
                <input type="text" />
            </div>
            <div className="memeButton">
                <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
            </div>

            <div className="memeImageContainer">
                <img src={memeImage} alt="" />
            </div>
        </div>
    )
}

export default Meme