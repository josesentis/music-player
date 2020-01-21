import React from 'react';
import 'normalize.css';

import Player from '../Player';

// import { client } from '../../apollo';
import playlist from '../../data/playlist.json';
// import { shuffle } from '../../utils';

import GlobalStyle from '../../styles/global';

import './App.css';

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
    // currentTime: 0,
    // songDuration: 0,
    volume: 60,
    // currentRandomIndex: 0,
    // playedSongs: 0,
  }

  componentDidMount() {
    this.touchable();
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
      // client.writeData({ data: { playerState: 'pause' } })
    } else {
      this.setState({ playerState: 'play' });
      // client.writeData({ data: { playerState: 'play' } })
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
      if (this.state.playerState === 'stop') {
        this.setState({ playerState: 'play' });
      }

      this.setState({ currentSongIndex: nextSong });
    } else if (this.state.playerState !== 'stop') {
        this.handleStop();
    }

  }

  handlePrevSong = () => {
    console.log('Handle PrevSong');

    if (this.state.currentSongIndex > 0) {
      this.setState({ currentSongIndex: this.state.currentSongIndex - 1 });

      if (this.state.playerState === 'stop') { this.setState({ playerState: 'play' }); }
    }
  }

  handleVolume = event => {
    console.log('Handle Volume');

    this.setState({ volume: event.currentTarget.value });
  }

  touchable() {
    const typedWindow = window || null;
    const touchsupport =
      'ontouchstart' in typedWindow ||
      typedWindow.navigator.maxTouchPoints > 0 ||
      typedWindow.navigator.msMaxTouchPoints > 0;
    const touchClass = touchsupport ? 'touch' : 'non-touch';

    document.documentElement.classList.add(touchClass);
  }

  render = () => {
    const {
      // songDuration,
      currentSongIndex,
      currentPlaylist,
      muted,
      playerState,
      repeat,
      volume
    } = this.state;

    console.log(this.state);

    return (
      <>
        <GlobalStyle />
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
          handleVolume={this.handleVolume}
          playerState={playerState}
          volume={volume}
          repeat={repeat}
          // currentTime={currentTime}
          // songDuration={songDuration}
        />
      </>
    );
  }
}

export default App;
