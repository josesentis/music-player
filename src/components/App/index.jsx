import React from 'react';

// import Controls from '../Controls';
import Player from '../Player';
// import Playlist from '../Playlist';
import playlist from '../../data/playlist.json';

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
    currentPlaylistIndex: 0,
    currentSongIndex: 0,
    muted: false,
    playerState: "stop",
    playlist: playlist.playlist,
    random: false,
    repeat: false,
    volume: 60,
    // currentRandomIndex: 0,
    // playedSongs: 0,
    // randomOrder: []
  }

  // toggleRandom = () => {
  // if (!this.state.random) {
  // this.setRandomOrders();
  //We are reordering (at the moment) all the songs, so we need to start again playing
  // this.setState({ playedSongs: 0 });
  // } else {
  //   //Random removed. Assume n - i songs left.
  //   this.setState({ playedSongs: this.state.currentSongIndex });
  // }

  // this.setState({ random: !this.state.random });
  // }

  handlePlay = () => {
    console.log('Handle Play');

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
    if (playerState === 'play') {
      this.setState({ playerState: 'pause' });
    } else {
      this.setState({ playerState: 'play' });
    }
  }

  handleStop = () => {
    console.log('Handle Stop');

    this.setState({ currentSongIndex: 0, playerState: 'stop' });
  }

  toggleMute = () => {
    console.log('Handle Mute');

    this.setState({ muted: !this.state.muted });
  }

  toggleRandom = () => {
    console.log('Handle Random');

    this.setState({ repeat: !this.state.random });
  }

  toggleRepeat = () => {
    console.log('Handle Repeat');

    this.setState({ repeat: !this.state.repeat });
  }

  handleNextSong = () => {
    console.log('Handle NextSong');

    if (this.state.playerState !== "stop") {
      let nextSong = this.state.currentSongIndex + 1;

      if (this.state.currentSongIndex + 1 < this.state.currentPlaylist.length) {
        nextSong = this.state.currentSongIndex + 1;
      } else {
        nextSong = 0;

        if (!this.state.repeat) {
          this.setState({ playerState: "stop" });
        }
      }

      this.setState({ currentSongIndex: nextSong });

      // if (this.state.random) {
      //   this.state.currentRandomIndex++;
      //   nextSong = this.state.randomOrder[this.state.currentRandomIndex];
      // } else {
      // nextSong = this.state.currentSongIndex + 1;
      // }

      // if (this.state.playedSongs < this.state.currentPlaylist.length - 1) {
      //   this.setState({ currentSongIndex: nextSong });
      //   this.state.playedSongs++;
      // } else if (this.state.playedSongs === this.state.currentPlaylist.length - 1 && this.state.loop) {

      //Init playlist when looping. Setting new random orders.
      // if (this.state.random) {
      //   this.setRandomOrders();
      //   this.setState({ currentSongIndex: this.state.randomOrder[0] });
      //   this.setState({ currentRandomIndex: 0 });
      //   this.setState({ playedSongs: 0 });
      // } else {
      // this.setState({ currentSongIndex: 0 });
      // this.setState({ playedSongs: 0 });
      // }
      // } else {
      //   this.setState({ playerState: "stop" });
    } else {
    }
  }

  handlePrevSong = () => {
    console.log('Handle PrevSong');

    // if (!this.state.random) {
    if (this.state.currentSongIndex > 0) {
      this.setState({ currentSongIndex: this.state.currentSongIndex - 1 });
    }

    // this.state.playedSongs--;
    // }
  }

  // handleChangeSong = () => {
  //   console.log("Loading new song ... ");
  // }

  render = () => {
    const { currentSongIndex, currentPlaylist, muted, playerState } = this.state;

    // console.log(this.state);

    return (
      <Player
        handleNextSong={this.handleNextSong}
        handlePrevSong={this.handlePrevSong}
        muted={muted}
        song={currentPlaylist[currentSongIndex]}
        toggleMute={this.toggleMute}
        toggleRandom={this.toggleRandom}
        toggleRepeat={this.toggleRepeat}
        handlePlay={this.handlePlay}
        handleStop={this.handleStop}
        playerState={playerState}
      />
    );
  }
  // setRandomOrders = () => {
  //   //if random is set, second round -> start from 0
  //   //if random not set, song playing. Current song -> order 0.

  //   console.log("Set random orders");

  //   var tempIndexes = [];
  //   var tempOrder = [];

  //   if (this.state.random || this.state.playerState == "stop") {
  //     for (var i = 0; i < this.state.currentPlaylist.length; i++) {
  //       tempIndexes[i] = i;
  //     }

  //     for (var i = 0; i < this.state.currentPlaylist.length; i++) {
  //       var rand = Math.floor(Math.random() * tempIndexes.length);
  //       tempOrder[i] = tempIndexes[rand];
  //       tempIndexes.splice(rand, 1);
  //     }

  //     this.state.randomOrder = tempOrder;
  //   } else {

  //     for (var i = 0; i < this.state.currentPlaylist.length; i++) {
  //       tempIndexes[i] = i;
  //     }

  //     tempOrder[0] = this.state.currentSongIndex;
  //     tempIndexes.splice(this.state.currentSongIndex, 1);

  //     for (var i = 0; i < this.state.currentPlaylist.length - 1; i++) {
  //       var rand = Math.floor(Math.random() * (tempIndexes.length - 1));
  //       tempOrder[i + 1] = tempIndexes[rand];
  //       tempIndexes.splice(rand, 1);
  //     }

  //     this.state.randomOrder = tempOrder;
  //   }

  //   this.setState({ currentRandomIndex: 0 });
  //   this.setState({ currentSongIndex: this.state.currentSongIndex });
  // }

  // handlePlay = event => {
  //   console.log("\n");
  //   console.log("-------- Play --------");
  //   console.log("Current state: ");
  //   console.log(this.state.playerState);

  //   event.preventDefault();

  //   if (this.state.playerState == 'stop') {
  //     if (this.state.random) {
  //       this.setRandomOrders();
  //       this.setState({ currentSongIndex: this.state.randomOrder[0] });
  //       this.setState({ currentRandomIndex: 0 });
  //     } else {
  //       this.setState({ currentSongIndex: 0 });
  //     }

  //     this.setState({ playerState: 'play' });
  //     this.setState({ playedSongs: 0 });
  //   } else if (this.state.playerState == 'play') {
  //     this.setState({ playerState: 'pause' });
  //   } else {
  //     this.setState({ playerState: 'play' });
  //   }
  // }
}

export default App;
