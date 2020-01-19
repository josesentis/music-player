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
    <Control onClick={play} icon={playerState === 'play' ? 'pause' : 'play'} />
    {/*<Control onClick={stop} icon={'stop'} />*/}
    <Control onClick={toggleRepeat} icon={'repeat'} />
    {/* <Control onClick={toggleRandom} icon={'random'} /> */}
    <div className="progress">
      <Control onClick={handlePrevSong} icon={'prev'} />
      <ProgressBar
        onChange={handleProgress}
        currentTime={currentTime}
        songDuration={songDuration}
      />
      <Control onClick={handleNextSong} icon={'next'} />
    </div>
    <div className="volume">
      <Control onClick={toggleMute} icon={muted || parseInt(volume) === 0 ? 'muted' : volume > 50 ? 'volumeHigh' : 'volumeLow'} />
      <Range className="small" onChange={handleVolume} value={muted ? 0 : volume} />
    </div>
  </ControlsStyled>
);

export default Controls;
