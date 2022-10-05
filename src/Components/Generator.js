import React from "react";
import memesData from "../Data/MemesData";

export default function Generator() {
 function handleGetMemeImage() {
  const memesArray = memesData.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  const url = memesArray[randomNumber].url // same as this but with object destructuring:
  // const {url} = memesArray[randomNumber]  // = get the url property from the memesArray.
  console.log(url);
  
 }
 
 return (
  <main>
   <div className="g-container">
    <h2 className="g-title">Meme Generator</h2>
     <div className="g-form">
      <div className="input-container">
       <input type="text" placeholder="Top Text"/>
       <input type="text" placeholder="Bottom Text"/>
      </div>
      <div className="submit-container">
       <button onClick={handleGetMemeImage}>Get a new meme image</button>
      </div>
     </div>
   </div>
   <div className="image-container">
   {/* <img alt="meme" source={meme} className="meme-image" /> */}
   </div>
  </main>
 )
}