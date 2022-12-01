import troll from "../images/trollface.png"

function Header() {
    return (
        <div className="App">
          <div className="header">
            <img src={troll} alt="" />
            <p>Meme Generator</p>
          </div>
        </div>
      )
}


export default Header