import * as React from 'react';

import Play from './Play';
import Mute from './Mute';
import Next from './Next';
import Prev from './Prev';
import Pause from './Pause';
import Random from './Random';
import VolumeHeight from './VolumeHeight';
import VolumeLow from './VolumeLow';

const Icon = ({ variant }) => {
  const buttonType = {
    play: Play,
    muted: Mute,
    next: Next,
    prev: Prev,
    pause: Pause,
    random: Random,
    volumeHeight: VolumeHeight,
    volumeLow: VolumeLow,
  };
  const Component = buttonType[variant];

  return (
    <Component />
  );
};

export default Icon;