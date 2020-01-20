import React from 'react';

import SongInfoStyled from './styles';

const SongInfo = ({ song }) => (
  <SongInfoStyled className="song-info">
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
