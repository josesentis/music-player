import React from 'react';

import Range from '../../../Range';

import ProgressBarStyled from './styles';

class ProgressBar extends React.Component {
  convertTime = timestamp => {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
    if (seconds < 10) { seconds = '0' + seconds; }
    timestamp = minutes + ':' + seconds;
    return timestamp;
  }

  render() {
    const { onChange, currentTime, songDuration } = this.props;

    return (
      <ProgressBarStyled className="progress-bar">
        <div className="progress-bar__info">
          <span>{this.convertTime(currentTime)}</span>
          <span>{this.convertTime(songDuration)}</span>
        </div>
        <Range
          onChange={onChange}
          value={songDuration ? currentTime * 100 / songDuration : 0}
        />
      </ProgressBarStyled>
    );
  }
}

export default ProgressBar;
