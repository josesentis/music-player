import * as React from 'react';

import Play from '../../assets/Play';
import Mute from '../../assets/Mute';
import Next from '../../assets/Next';
import Prev from '../../assets/Prev';
import Pause from '../../assets/Pause';
import Random from '../../assets/Random';
import Repeat from '../../assets/Repeat';
import VolumeHigh from '../../assets/VolumeHigh';
import VolumeLow from '../../assets/VolumeLow';

const Icon = ({ variant }) => {
 const iconType = {
  play: Play,
  muted: Mute,
  next: Next,
  prev: Prev,
  pause: Pause,
  random: Random,
  repeat: Repeat,
  volumeHigh: VolumeHigh,
  volumeLow: VolumeLow,
 };
 const Component = iconType[variant];

 return <Component />;
};

export default Icon;
