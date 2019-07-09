import React from 'react';

const Controls = ({
  handleNextSong,
  handlePrevSong,
  handleVolume,
  muted,
  playerState,
  play,
  stop,
  toggleRepeat,
  // toggleRandom,
  toggleMute,
  volume
}) => (
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
      <div>
        <button onClick={handlePrevSong}>prev</button>
        <button onClick={handleNextSong}>next</button>
      </div>
    </div>
  );

export default Controls;
