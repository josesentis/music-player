import React from 'react';

class ProgressBar extends React.PureComponent {
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
      <div className="progress-bar">
        <span>{this.convertTime(currentTime)}</span>
        <input
          className="progress-bar__input"
          type="range"
          id="progressBar"
          name="progress"
          step="1"
          onChange={onChange}
          value={songDuration ? currentTime * 100 / songDuration : 0}
          max="100"
        />
        <span>{this.convertTime(songDuration)}</span>
      </div>
    );
  }
}

export default ProgressBar;
