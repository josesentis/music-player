import React from 'react';

import Player from '../Player';
import playlist from '../../data/playlist.json';

// import { shuffle } from '../../utils';

import './App.css';

/**
 *
 *  TODO:
 *  - Next / Prev songs.
 *  - Volume handling.
 *  - Random orders.
 *
 **/
class App extends React.Component {
  state = {
    currentPlaylist: playlist.playlist[0].list,
    // currentPlaylistIndex: 0,
    currentSongIndex: 1,
    muted: false,
    playerState: "stop",
    // playlist: playlist.playlist,
    // randomOrders: [],
    // random: false,
    repeat: false,
    volume: 60,
    // currentRandomIndex: 0,
    // playedSongs: 0,
  }

  // setRandomOrders = () => {
  //   let randomOrders;

  //   if (this.state.playerState !== "stop") {
  //     const tempCurrentPlaylist = this.state.currentPlaylist.slice();

  //     randomOrders = tempCurrentPlaylist.splice(this.state.currentSongIndex, 1);
  //     randomOrders = [...randomOrders, ...shuffle(tempCurrentPlaylist)];
  //   } else {
  //     randomOrders = shuffle(this.state.currentPlaylist);
  //   }

  //   this.setState({ randomOrders });
  // }

  handlePlay = () => {
    console.log('Handle Play');

    const { playerState } = this.state;

    if (playerState === 'play') {
      this.setState({ playerState: 'pause' });
    } else {
      this.setState({ playerState: 'play' });
    }
  }

  handleStop = () => {
    console.log('Handle Stop');

    this.setState({
      currentSongIndex: 0,
      playerState: 'stop'
    });
  }

  toggleMute = () => {
    console.log('Handle Mute');

    this.setState({ muted: !this.state.muted });
  }

  // toggleRandom = () => {
  //   console.log('Handle Random');

  //   if (!this.state.random) { this.setRandomOrders(); }

  //   this.setState({ random: !this.state.random });
  // }

  toggleRepeat = () => {
    console.log('Handle Repeat');

    this.setState({ repeat: !this.state.repeat });
  }

  handleNextSong = () => {
    console.log('Handle NextSong');

    let nextSong = this.state.currentSongIndex + 1;

    if (nextSong < this.state.currentPlaylist.length) {
      if (this.state.playerState === 'stop') { this.setState({ playerState: 'play' }); }
    } else {
      nextSong = 0;

      if (this.state.playerState !== 'stop') { this.setState({ playerState: 'stop' }); }
    }

    this.setState({ currentSongIndex: nextSong });
  }

  handlePrevSong = () => {
    console.log('Handle PrevSong');

    if (this.state.currentSongIndex > 0) {
      this.setState({ currentSongIndex: this.state.currentSongIndex - 1 });
    }
  }

  render = () => {
    const { currentSongIndex, currentPlaylist, muted, playerState } = this.state;

    console.log(this.state);

    return (
      <Player
        handleNextSong={this.handleNextSong}
        handlePrevSong={this.handlePrevSong}
        muted={muted}
        song={currentPlaylist[currentSongIndex]}
        toggleMute={this.toggleMute}
        // toggleRandom={this.toggleRandom}
        toggleRepeat={this.toggleRepeat}
        handlePlay={this.handlePlay}
        handleStop={this.handleStop}
        playerState={playerState}
      />
    );
  }
}

export default App;
