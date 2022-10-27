import React, { useState, useEffect } from "react";

export default function Generator() {
  const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = useState<any[]>([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
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

return (
  <main>
  <div className="g-container">
    <h2 className="g-title">Meme Generator</h2>
    <div className="g-form">
      <div className="input-container">
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
      <div className="submit-container">
        <button 
          onClick={getMemeImage}>Get a new meme image
        </button>
      </div>
    </div>
  </div>
  <div className="image-container">
    <img src={meme.randomImage} alt="meme" className="meme-image" />
    <h2 className="meme-text top">{meme.topText}</h2>
    <h2 className="meme-text bottom">{meme.bottomText}</h2>
  </div>
  </main>
  )
}

