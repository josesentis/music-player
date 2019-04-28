import React from "react";

class Player extends React.Component {
  state = {
    muted: false,
    playerState: "play",
    volume: 60,
  }

  render() {
    const { song } = this.props;
    const { muted } = this.state;

    // switch (playing) {
    //   case "play":
    //     this._player.play();
    //     break;
    //   case "pause":
    //     this._player.pause();
    //     break;
    //   case "stop":
    //     this._player.pause();
    //     this._player.currentTime = 0;
    //     break;
    //   default:
    // }

    // if (volume) {
    //   this._player.volume = volume;
    // }

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
      </div>
    );
  }
}

export default Player;
