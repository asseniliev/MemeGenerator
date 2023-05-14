import React, { useState } from 'react';
import memeData from '../memeData';

export default function Meme() {

  const [allMemeImages, setAllMemeImages] = useState(memeData.data.memes);

  const [meme, setMeme] = useState({
    "topText": "",
    "bottomText": "",
    "randomImage": getRandomUrl(allMemeImages)
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => {
      return ({
        ...prevMeme,
        [name]: value
      });
    });
  }

  function handleOnClick(array) {
    setMeme(prevMeme => {
      return {
        "topText": "",
        "bottomText": "",
        randomImage: getRandomUrl(allMemeImages)
      }
    });
  }

  function getRandomUrl(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index].url;
  }


  return (
    <div className='meme-container'>
      <div className='meme-input-container'>
        <input
          className='meme-input-field'
          placeholder='Shut up'
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='meme-input-field'
          placeholder='and take my money'
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="meme-button" onClick={() => handleOnClick(allMemeImages)}>
        Get a new meme image &#129347;
      </button>
      <div className="image-container">
        <img className="image" src={meme.randomImage} alt="Random meme image" />
        <h2 className="image-text image-topText">{meme.topText}</h2>
        <h2 className="image-text image-bottomText">{meme.bottomText}</h2>
      </div >
    </div >
  )
}