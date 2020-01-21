import React from 'react';

import Range from '../../../Range';

import { convertTime } from '../../../../utils';
import ProgressBarStyled from './styles';

const ProgressBar = ({ onChange, currentTime, songDuration }) => (
  <ProgressBarStyled>
    <div className="info">
      <span>{convertTime(currentTime)}</span>
      <span>{convertTime(songDuration)}</span>
    </div>
    <Range
      onChange={onChange}
      name="progress"
      value={songDuration ? currentTime * 100 / songDuration : 0}
    />
  </ProgressBarStyled>
);

export default ProgressBar;
