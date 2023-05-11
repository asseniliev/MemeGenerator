import React, { useState } from 'react';
import memeData from '../memeData';

export default function Meme() {

  const [allMemeImages, setAllMemeImages] = useState(memeData.data.memes);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: getRandomUrl(allMemeImages)
  })

  function handleOnClick(array) {
    setMeme(prevMeme => {
      return {
        ...prevMeme,
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
        />
        <input
          className='meme-input-field'
          placeholder='and take my money'
        />
      </div>
      <button className="meme-button" onClick={() => handleOnClick(allMemeImages)}>
        Get a new meme image &#129347;
      </button>
      <img className="image" src={meme.randomImage} alt="Random meme image" />

    </div >
  )
}