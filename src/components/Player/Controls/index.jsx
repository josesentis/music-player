import React from 'react';

import Button from './Button';
import ProgressBar from './ProgressBar';
import Volume from './Volume';

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
    <div>
      <ProgressBar currentTime={currentTime} songDuration={songDuration} />
      <div>
        <Button onClick={play} icon={playerState === 'play' ? 'pause' : 'play'}} />
        <Button onClick={stop} icon={'stop'} />
        <Button onClick={toggleRepeat} icon={'repeat'} />
        {/* <Button onClick={toggleRandom} icon={'random'} /> */}
        <Button onClick={toggleMute} icon={muted ? 'muted' : 'mute'} />
        <Volume onChange={handleVolume} muted={muted} value={volume} />
        <Button onClick={handlePrevSong} icon={prev} />
        <Button onClick={handleNextSong} icon={next} />
      </div>
    </div>
  )
};

export default Controls;
