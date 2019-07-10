import React from 'react';

const SongInfo = ({ song }) => (
  <>
    <header>
      <img
        src={song.imgsrc}
        alt={song.title}
      />
    </header>
    <div>
      {song.singer} - {song.title}
    </div>
  </>
);

export default SongInfo;
