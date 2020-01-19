import React from 'react';

import Range from '../Range';
import Control from './Control';
import ControlsStyled from './styles';

const Controls = ({
  handleNextSong,
  handlePrevSong,
  handleVolume,
  muted,
  playerState,
  play,
  // stop,
  toggleRepeat,
  // toggleRandom,
  toggleMute,
  volume,
}) => (
  <ControlsStyled>
    <Control onClick={play} icon={playerState === 'play' ? 'pause' : 'play'} />
    {/*<Control onClick={stop} icon={'stop'} />*/}
    <Control onClick={toggleRepeat} icon={'repeat'} />
    {/* <Control onClick={toggleRandom} icon={'random'} /> */}
    <Control onClick={toggleMute} icon={muted || parseInt(volume) === 0 ? 'muted' : volume > 50 ? 'volumeHigh' : 'volumeLow'} />
    <div className="progress">
      <Control onClick={handlePrevSong} icon={'prev'} />
      <Range className="small" onChange={handleVolume} value={muted ? 0 : volume} />
      <Control onClick={handleNextSong} icon={'next'} />
    </div>
  </ControlsStyled>
);

export default Controls;
