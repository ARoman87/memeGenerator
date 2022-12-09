import memesData from "../memesData"
import React from "react"

function Meme() {
    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemesImages, setAllMemesImages] = React.useState(memesData)

    console.log(meme)

    function getMemeImage() {
        const memesArray = allMemesImages.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
    
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }



    function handSubmit(event) {
        event.preventDefault()

    }



    return (
        <div>
            <form onSubmit={handSubmit}>
                <div className="inputs">

                    <input 
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} 
                    />

                    <input 
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange} 
                    />

                </div>

                <div className="memeButton">
                    <button onClick={getMemeImage}>Get a new meme image 🖼️</button>
                </div>
            </form>

            <div className="memeImageContainer">
                <img src={meme.randomImage} alt="" />
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom" >{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme