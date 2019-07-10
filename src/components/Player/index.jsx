import React from "react";

import Controls from './Controls';
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

      console.log(currentTime);

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

    console.log('Interval:', this._interval);

    return (
      <div>
        <SongInfo song={song} />
        <audio
          id="player"
          muted={muted}
          ref={el => {
            this._player = el;
          }}
        >
          <source src={song.filessrc} type="audio/mp3" />
        </audio>
        <Controls
          {...this.props}
          currentTime={currentTime}
          songDuration={songDuration}
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
