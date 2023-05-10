import React, { useState } from 'react';
import memeData from '../memeData';

export default function Meme() {

  const [url, setUrl] = useState("");

  function handleOnClick(array) {
    const index = Math.floor(Math.random() * array.length);
    const newUrl = array[index].url;
    console.log(newUrl);
    setUrl(newUrl);
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
      <button className="meme-button" onClick={() => handleOnClick(memeData.data.memes)}>
        Get a new meme image &#129347;
      </button>
      <img className="image" src={url} alt="Random meme image" />

    </div >
  )
}