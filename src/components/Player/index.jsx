import React from "react";

import Controls from './Controls';

class Player extends React.Component {
  componentDidUpdate = prevProps => {
    if (prevProps.song !== this.props.song) {
      this._player.pause();
      this._player.load();

      if (this.props.playerState === 'play') { this._player.play(); }
    }

    this._player.volume = this.props.volume / 100;
  }

  render() {
    const { handlePlay, handleStop, muted, playerState, song } = this.props;

    return (
      <div>
        <header>
          <img
            src={song.imgsrc}
            alt={song.title}
          />
        </header>
        <div>
          {song.singer} - {song.title}
        </div>
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
          stop={() => {
            this._player.pause();
            this._player.currentTime = 0;

            handleStop();
          }}
          play={() => {
            if (playerState === 'play') {
              this._player.pause();
            } else {
              this._player.play();
            }

            handlePlay();
          }}
          muted={muted}
          {...this.props}
        />
      </div>
    );
  }
}

export default Player;
