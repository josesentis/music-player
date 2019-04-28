import React from 'react';

const Controls = ({ handleNextSong, handlePrevSong, mute, play, playerState, stop, toggleRepeat, toggleRandom }) => (
  <div id="controls">
    <div>
      <button onClick={play}>
        {playerState === 'play' ? 'pause' : 'play'}
      </button>
      <button onClick={stop}>stop</button>
      <button onClick={toggleRepeat}>repeat</button>
      <button onClick={toggleRandom}>random</button>
      <button onClick={mute}>muted</button>
      {/* <input type="range" id="volume" name="volume" step="1"
            onChange={this.handleVolume} value={this.state.muted ? 0 : this.state.volume} max="100" /> */}
    </div>
    <div>
      <button onClick={handlePrevSong}>prev</button>
      <button onClick={handleNextSong}>next</button>
    </div>
  </div>
);

export default Controls;
