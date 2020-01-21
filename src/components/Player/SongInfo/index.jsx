import React from 'react';

import SongInfoStyled from './styles';

const SongInfo = ({ song }) => (
  <SongInfoStyled>
    <div className="cover">
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
