import React from 'react';

class ProgressBar extends React.Component {
  convertTime = timestamp => {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
    if (seconds < 10) { seconds = '0' + seconds; }
    timestamp = minutes + ':' + seconds;
    return timestamp;
  }

  render() {
    const { currentTime, songDuration } = this.props;

    const songProgress = songDuration ? currentTime * 100 / songDuration : 0;

    return (
      <div className="progress-bar">
        <span>{this.convertTime(currentTime)}</span>
        <input
          className="progress-bar__input"
          type="range"
          id="progressBar"
          name="progress"
          step="1"
          // onChange={handleVolume}
          onChange={() => {
            console.log('Change');
          }}
          value={songProgress}
          max="100"
        />
        <span>{this.convertTime(songDuration)}</span>
      </div>
    );
  }
}

export default ProgressBar;
