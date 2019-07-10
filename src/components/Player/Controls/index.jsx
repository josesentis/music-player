import React from 'react';

import ProgressBar from './ProgressBar';

const Controls = ({
  currentTime,
  handleNextSong,
  handlePrevSong,
  handleVolume,
  muted,
  playerState,
  play,
  songDuration,
  stop,
  toggleRepeat,
  // toggleRandom,
  toggleMute,
  volume
}) => {
  console.log('Current time:', currentTime);
  console.log('Song duration:', songDuration);

  return (
    <div id="controls">
      <div>
        <button onClick={play}>
          {playerState === 'play' ? 'pause' : 'play'}
        </button>
        <button onClick={stop}>stop</button>
        <button onClick={toggleRepeat}>repeat</button>
        {/* <button onClick={toggleRandom}>random</button> */}
        <button onClick={toggleMute}>{muted ? 'muted' : 'mute'}</button>
        <input type="range" id="volume" name="volume" step="1"
            onChange={handleVolume} value={muted ? 0 : volume} max="100" />
      </div>
      <ProgressBar currentTime={currentTime} songDuration={songDuration} />
      <div>
        <button onClick={handlePrevSong}>prev</button>
        <button onClick={handleNextSong}>next</button>
      </div>
    </div>
  )
};

export default Controls;
