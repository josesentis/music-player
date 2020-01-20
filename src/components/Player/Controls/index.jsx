import React from 'react';

import Range from '../../Range';
import Control from './Control';
import ProgressBar from './ProgressBar';

import ControlsStyled from './styles';

const Controls = ({
  handleNextSong,
  handlePrevSong,
  handleProgress,
  handleVolume,
  muted,
  playerState,
  play,
  // stop,
  toggleRepeat,
  // toggleRandom,
  toggleMute,
  volume,
  currentTime,
  songDuration
}) => (
  <ControlsStyled>
    {/*<Control onClick={stop} icon={'stop'} />*/}
    <ProgressBar
      onChange={handleProgress}
      currentTime={currentTime}
      songDuration={songDuration}
    />
    <div className="controls">
      {/* <Control onClick={toggleRandom} icon={'random'} type="small" /> */}
      <Control onClick={handlePrevSong} icon={'prev'} />
      <Control onClick={play} icon={playerState === 'play' ? 'pause' : 'play'} type="large" />
      <Control onClick={handleNextSong} icon={'next'} />
      <Control onClick={toggleRepeat} icon={'repeat'} type="small" />
    </div>
    <div className="controls">
      <Control onClick={toggleMute} icon={muted || parseInt(volume) === 0 ? 'muted' : volume > 50 ? 'volumeHigh' : 'volumeLow'} />
      <Range className="small" onChange={handleVolume} value={muted ? 0 : volume} />
    </div>
  </ControlsStyled>
);

export default Controls;
