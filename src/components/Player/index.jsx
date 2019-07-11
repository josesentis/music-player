import React from "react";

import Controls from './Controls';
import ProgressBar from './ProgressBar';
import SongInfo from './SongInfo';

class Player extends React.Component {
  state = {
    currentTime: 0,
    songDuration: 0
  }

  componentDidUpdate = prevProps => {
    if (prevProps.song !== this.props.song) {
      this._player.pause();
      this._player.load();

      if (this.props.playerState === 'play') { this._player.play(); }
    }

    this._player.volume = this.props.volume / 100;
  }

  updateTime = timestamp => {
    const currentTime = Math.floor(timestamp);

    this.setState({ currentTime });
  }

  handleProgress = event => {
    const currentTime = Math.floor(this.state.songDuration * event.currentTarget.value / 100);

    this.updateTime(currentTime);
    this._player.currentTime = currentTime;
  }

  clearPlayer = () => {
    clearInterval(this._interval);
    this._player.currentTime = 0;
    this.setState({ currentTime: 0, songDuration: 0 });
  }

  startProgressBar = () => {
    const songDuration = Math.floor(this._player.duration);

    this.setState({ songDuration });
    this._interval = setInterval(() => {
      let currentTime = this._player.currentTime;

      this.updateTime(currentTime);
    }, 100);
  }

  render() {
    const {
      handlePlay,
      handleStop,
      handleNextSong,
      handlePrevSong,
      muted,
      playerState,
      song,
      repeat
    } = this.props;

    const {
      currentTime,
      songDuration,
    } = this.state;

    return (
      <div className="player">
        <SongInfo song={song} />
        <audio
          muted={muted}
          ref={el => {
            this._player = el;
          }}
        >
          <source src={song.filessrc} type="audio/mp3" />
        </audio>
        <ProgressBar
          onChange={this.handleProgress}
          currentTime={currentTime}
          songDuration={songDuration}
        />
        <Controls
          {...this.props}
          currentTime={currentTime}
          songDuration={songDuration}
          handleProgress={this.handleProgress}
          stop={() => {
            this._player.pause();

            handleStop();
            this.clearPlayer();
          }}
          play={() => {
            if (playerState === 'play') {
              this._player.pause();
              clearInterval(this._interval);
            } else {
              this._player.play();
              this.startProgressBar();
            }

            handlePlay();
          }}
          handleNextSong={() => {
            if (repeat) {
              this._player.currentTime = 0;
            } else {
              handleNextSong();
            }

            this.clearPlayer();
            this.startProgressBar();
          }}
          handlePrevSong={() => {
            if (repeat) {
              this._player.currentTime = 0;
              return;
            } else {
              handlePrevSong();
            }

            this.clearPlayer();
            this.startProgressBar();
          }}
          muted={muted}
        />
      </div>
    );
  }
}

export default Player;
