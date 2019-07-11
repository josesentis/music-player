import React from 'react';

import Button from './Button';
import Volume from './Volume';

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
}) => {
  return (
    <div className="controls">
      <Button onClick={play} icon={playerState === 'play' ? 'pause' : 'play'} />
      <Button onClick={stop} icon={'stop'} />
      <Button onClick={toggleRepeat} icon={'repeat'} />
      {/* <Button onClick={toggleRandom} icon={'random'} /> */}
      <Button onClick={toggleMute} icon={muted ? 'muted' : 'mute'} />
      <Volume onChange={handleVolume} muted={muted} value={volume} />
      <Button onClick={handlePrevSong} icon={'prev'} />
      <Button onClick={handleNextSong} icon={'next'} />
    </div>
  )
};

export default Controls;
