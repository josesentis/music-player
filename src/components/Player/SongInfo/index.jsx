import React from 'react';

const SongInfo = ({ song }) => (
  <>
    <header>
      <img
        src={song.img}
        alt={song.title}
      />
    </header>
    <div>
      {song.singer} - {song.title}
    </div>
  </>
);

export default SongInfo;
