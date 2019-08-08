import React from 'react';

import SongInfoStyled from './styles';
import Chevron from '../../../assets/Chevron';

const SongInfo = ({ song }) => (
  <SongInfoStyled className="song-info">
    <button 
      className="song-info__toggle"
      onClick={e => {e.currentTarget.parentElement.classList.toggle('active')}}>
      <Chevron />
    </button>
    <header className="song-info__header">
      NOW PLAYING
    </header>
    <div className="song-info__img">
      <img
        src={song.img}
        alt={`Title for ${song.title}`}
      />
    </div>
    <p>{song.title}</p>
    <p className="tag">{song.singer}</p>
  </SongInfoStyled>
);

export default SongInfo;
