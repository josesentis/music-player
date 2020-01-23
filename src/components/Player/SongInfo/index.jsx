import React from 'react';

import SongInfoStyled, { SongInfoSmall } from './styles';

const SongInfo = ({ song, variant = 'default' }) => {
  const infoStyle = {
    small: SongInfoSmall,
    default: SongInfoStyled
  };

  const Component = infoStyle[variant];

  return (
    <Component className="song-info">
      <div className="cover">
        <img
          src={song.img}
          alt={`Title for ${song.title}`}
        />
      </div>
      <div className="info">
        <p className={variant === 'small' ? 'p-small' : 'p-big'}>{song.title}</p>
        <p className="tag">{song.singer}</p>
      </div>
    </Component>
  )
};

export default SongInfo;
