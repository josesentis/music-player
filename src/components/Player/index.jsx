import React from "react";

import Controls from './Controls';

class Player extends React.Component {
  state = {
    muted: false,
    playerState: "stop",
    volume: 60,
  }

  handlePlay = () => {
    const { playerState } = this.state;

		// if (playerState == 'stop') {

			// if (this.state.random) {
			// 	this.setRandomOrders();
			// 	this.setState({ currentSongIndex: this.state.randomOrder[0] });
			// 	this.setState({ currentRandomIndex: 0 });
			// } else {
			// 	this.setState({ currentSongIndex: 0 });
			// }

    //   this.setState({ playedSongs: 0 });
    //   this._player.play();
    // } else
    if (playerState == 'play') {
      this.setState({ playerState: 'pause' });
      this._player.pause();
		} else {
      this.setState({ playerState: 'play' });
      this._player.play();
		}
  }

	handleStop = () => {
    this.setState({ playerState: 'stop' });
    this._player.pause();
    this._player.currentTime = 0;
  }

	toggleMute = () => {
		this.setState({ muted: !this.state.muted });
	}

  render() {
    const { song } = this.props;
    const { muted, playerState } = this.state;

    console.log(playerState);
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
        <Controls
          play={this.handlePlay}
          playerState={playerState}
          stop={this.handleStop}
          mute={this.handleMute}
        />
      </div>
    );
  }
}

export default Player;
