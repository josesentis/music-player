import React from 'react';

import Range from '../Range';
import Button from './Button';

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
    <div className="controls">
      <Button onClick={play} icon={playerState === 'play' ? 'pause' : 'play'} />
      {/*<Button onClick={stop} icon={'stop'} />*/}
      <Button onClick={toggleRepeat} icon={'repeat'} />
      {/* <Button onClick={toggleRandom} icon={'random'} /> */}
      <Button onClick={toggleMute} icon={muted || parseInt(volume) === 0 ? 'muted' : volume > 50 ? 'volumeHeigh' : 'volumeLow'} />
      <Range className="small" onChange={handleVolume} value={muted ? 0 : volume} />
      <Button onClick={handlePrevSong} icon={'prev'} />
      <Button onClick={handleNextSong} icon={'next'} />
    </div>
  );

export default Controls;
