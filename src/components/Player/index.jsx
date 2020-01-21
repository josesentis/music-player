import React from "react";
import { graphql, withApollo } from 'react-apollo';

import Controls from './Controls';
import SongInfo from './SongInfo';
import Toggle from './Toggle';

import { client } from '../../apollo';
import playlists from '../../data/playlist.json';
import GET_PLAYER_STATE from './queries';
import PlayerStyled from './styles';

class Player extends React.Component {
  state = {
    currentTime: 0,
    songDuration: 0
  };

  componentDidUpdate = prevProps => {
    const { loading, songIndex, playlistId } = this.props.data;
    const prevPlaylist = prevProps.data.playlistId;
    const prevSong = prevProps.data.songIndex;

    if (!loading) {
      if (prevSong !== songIndex || prevPlaylist !== playlistId) {
        console.log('Song changed');

        this._player.pause();
        this._player.load();

        if (this.props.data.playerState === 'play') this._player.play();
      } else {
        console.log('Song didn\'t change');
      }

      this._player.volume = this.props.data.volume / 100;
    }
  };

  updateTime = timestamp => {
    const currentTime = Math.floor(timestamp);

    this.setState({ currentTime });
  };

  handleProgress = event => {
    console.log('Handle progress');

    const currentTime = Math.floor(this._player.duration * event.currentTarget.value / 100);

    this.updateTime(currentTime);
    this._player.currentTime = currentTime;
  };

  clearPlayer = () => {
    clearInterval(this._interval);
    this._player.currentTime = 0;
    this._player.removeEventListener('ended', this.handleNextSong);

    this.setState({ currentTime: 0, songDuration: 0 });
  };

  startProgressBar = () => {
    console.log('Start progress bar');
    const songDuration = Math.floor(this._player.duration);

    this.setState({ songDuration });
    this._interval = setInterval(() => {
      let currentTime = this._player.currentTime;

      this.updateTime(currentTime);
    }, 100);

    this._player.addEventListener('ended', this.handleNextSong);
  };

  // setRandomOrders = () => {
  //   let randomOrders;

  //   if (this.state.playerState !== "stop") {
  //     const tempplaylist = this.state.playlist.slice();

  //     randomOrders = tempplaylist.splice(this.state.songIndex, 1);
  //     randomOrders = [...randomOrders, ...shuffle(tempplaylist)];
  //   } else {
  //     randomOrders = shuffle(this.state.playlist);
  //   }

  //   this.setState({ randomOrders });
  // }

  handlePlay = () => {
    const { playerState } = this.props.data;

    console.log('Handle Play', playerState);

    if (playerState === 'play') {
      // this.setState({ playerState: 'pause' });
      this._player.pause();
      clearInterval(this._interval);
      client.writeData({ data: { playerState: 'pause' } });
    } else {
      // this.setState({ playerState: 'play' });
      this._player.play();
      this.startProgressBar();
      client.writeData({ data: { playerState: 'play' } });
    }
  }

  handleStop = () => {
    console.log('Handle Stop');

    this._player.pause();
    this.clearPlayer();

    this.setState({
      songIndex: 0,
      // playerState: 'stop'
    });
    client.writeData({ data: { playerState: 'stop' } })
  }

  toggleMute = () => {
    console.log('Handle Mute');

    // // this.setState({ muted: !this.state.muted });
    client.writeData({ data: { muted: !this.props.data.muted } })
  }

  // toggleRandom = () => {
  //   console.log('Handle Random');

  //   if (!this.state.random) { this.setRandomOrders(); }

  //   this.setState({ random: !this.state.random });
  //   client.writeData({ data: { random: !this.props.data.random } })
  // }

  toggleRepeat = () => {
    console.log('Handle Repeat');

    // this.setState({ repeat: !this.state.repeat });
    client.writeData({ data: { repeat: !this.props.data.repeat } })
  }

  handleNextSong = () => {
    console.log('Handle NextSong');

    if (this.state.repeat) {
      this._player.currentTime = 0;
    } else {
      let nextSong = this.state.songIndex + 1;

      if (nextSong < this.state.playlist.length) {
        if (this.state.playerState === 'stop') {
          // this.setState({ playerState: 'play' });
          client.writeData({ data: { playerState: 'play' } })
        }

        // this.setState({ songIndex: nextSong });
        client.writeData({ data: { songIndex: nextSong } })
      } else if (this.state.playerState !== 'stop') {
        this.handleStop();
      }
    }

    this.clearPlayer();
    this.startProgressBar();
  }

  handlePrevSong = () => {
    console.log('Handle PrevSong');

    if (this.state.repeat) {
      this._player.currentTime = 0;
      return;
    } else {
      if (this.state.songIndex > 0) {
        // this.setState({ songIndex: this.state.songIndex - 1 });
        client.writeData({ data: { songIndex: this.state.songIndex - 1 } })

        if (this.state.playerState === 'stop') {
          // this.setState({ playerState: 'play' });
          client.writeData({ data: { playerState: 'play' } })
        }
      }
    }

    this.clearPlayer();
    this.startProgressBar();
  }

  handleVolume = event => {
    console.log('Handle Volume');

    // this.setState({ volume: event.currentTarget.value });
    client.writeData({ data: { volume: event.currentTarget.value } })
  }

  render() {
    console.log('Render');

    const {
      data: {
        activePlayer,
        muted,
        songIndex,
        playlistId,
        loading
      }
    } = this.props;

    const {
      currentTime,
      songDuration,
    } = this.state;

    if (loading) return <p>Loading...</p>;

    const song = playlists[playlistId][songIndex];

    return (
      <PlayerStyled
        id="player"
        background={song.img}
        className={activePlayer ? 'active' : ''}
      >
        <span className="background"></span>
        <div className="content">
          <Toggle />
          <SongInfo song={song} />
          <audio
            muted={muted}
            ref={el => {
              this._player = el;
            }}
          >
            <source src={song.src} type="audio/mp3" />
          </audio>
          <Controls
            currentTime={currentTime}
            songDuration={songDuration}
            handleProgress={this.handleProgress}
            stop={this.handleStop}
            play={this.handlePlay}
            handleNextSong={this.handleNextSong}
            handlePrevSong={this.handlePrevSong}
            handleVolume={this.handleVolume}
            muted={muted}
            {...this.props.data}
          />
        </div>
      </PlayerStyled>
    );
  };
}

// export default Player;
export default graphql(GET_PLAYER_STATE, {
  options: () => ({
    fetchPolicy: 'cache-and-network'
  })
})(withApollo(Player));
