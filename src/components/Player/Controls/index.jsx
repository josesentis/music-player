import React from 'react';

import Button from '../../Button';
import ProgressBar from '../../ProgressBar';
import Range from '../../Range';

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
        <Button onClick={handlePrevSong} icon={'prev'} />
        <Button onClick={play} icon={playerState === 'play' ? 'pause' : 'play'} type="large" />
        <Button onClick={handleNextSong} icon={'next'} />
        <Button onClick={toggleRepeat} icon={'repeat'} type="small" className="toggle" />
      </div>
      <div className="controls">
        <Button
          onClick={toggleMute}
          icon={muted || parseInt(volume) === 0 ? 'muted' : volume > 50 ? 'volumeHigh' : 'volumeLow'}
          className="toggle active small"
        />
        <Range className="small" onChange={handleVolume} value={muted ? 0 : volume} />
      </div>
    </ControlsStyled>
  );

export default Controls;
