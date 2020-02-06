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
  handlePlay,
  toggleRepeat,
  toggleRandom,
  toggleMute,
  volume,
  currentTime,
  songDuration
}) => (
    <ControlsStyled>
      <ProgressBar
        onChange={handleProgress}
        currentTime={currentTime}
        songDuration={songDuration}
      />
      <div className="controls">
        <Button onClick={handlePrevSong} icon={'prev'} />
        <Button onClick={handlePlay} icon={playerState === 'play' ? 'pause' : 'play'} type="large" />
        <Button onClick={handleNextSong} icon={'next'} />
      </div>
      <div className="controls">
        <Button onClick={toggleRandom} icon={'random'} type="small" className="toggle" />
        <Button onClick={toggleRepeat} icon={'repeat'} type="small" className="toggle" />
        <div className="volume">
          <Button
            onClick={toggleMute}
            icon={muted || parseInt(volume) === 0 ? 'muted' : volume > 50 ? 'volumeHigh' : 'volumeLow'}
            className="toggle active small"
          />
          <Range className="small" onChange={handleVolume} value={muted ? 0 : volume} />
        </div>
      </div>
    </ControlsStyled>
  );

export default Controls;
