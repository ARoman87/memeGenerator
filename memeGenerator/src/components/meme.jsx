import memesData from "../memesData"

function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
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
        </div>
    )
}

export default Meme