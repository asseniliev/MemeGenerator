import React from 'react';

export default function Meme() {
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
      <button className="meme-button">Get a new meme image</button>
    </div>
  )
}