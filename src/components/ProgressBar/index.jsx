import React from 'react';

import Range from '../Range';

import { convertTime } from '../../utils';
import ProgressBarStyled from './styles';

const ProgressBar = ({ onChange, currentTime, songDuration, name = 'progress', variant = 'default' }) => (
  <ProgressBarStyled className={`progress-bar ${variant}`}>
    {variant === 'default' && (
      <div className="info">
        <span>{convertTime(currentTime)}</span>
        <span>{convertTime(songDuration)}</span>
      </div>
    )}
    <Range
      onChange={onChange}
      name={name}
      value={songDuration ? currentTime * 100 / songDuration : 0}
    />
  </ProgressBarStyled>
);

export default ProgressBar;
