import React from 'react';

import SongInfoStyled from './styles';

const SongInfo = ({ song }) => (
  <SongInfoStyled className="song-info">
    <header className="song-info__header">
      <img
        src={song.img}
        alt={song.title}
      />
    </header>
    <div className="song-info__singer">{song.singer}</div>
    <div className="song-info__title">{song.title}</div>
  </SongInfoStyled>
);

export default SongInfo;
