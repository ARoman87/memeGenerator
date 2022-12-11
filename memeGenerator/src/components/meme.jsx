import React from "react"

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemesImages, setAllMemesImages] = React.useState([])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemesImages.length)
        const url = allMemesImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
    
        }))
    }
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemesImages(data.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }




    return (
        <div>
            
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
            

            <div className="memeImageContainer">
                <img src={meme.randomImage} alt="" />
                <h2 className="memeText top">{meme.topText}</h2>
                <h2 className="memeText bottom" >{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme