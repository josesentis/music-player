import React from "react";
import { graphql, withApollo } from 'react-apollo';

import Chevron from '../../assets/Chevron';
import Controls from './Controls';
import SongInfo from './SongInfo';

import { client } from '../../apollo';
import playlists from '../../data/playlist.json';
import GET_PLAYER_STATE from './queries';
import PlayerStyled, { Toggle } from './styles';

class Player extends React.Component {
  state = {
    currentTime: 0,
    songDuration: 0
  };

  componentDidUpdate = prevProps => {
    const { loading, songIndex, playlistId } = this.props.data;
    const prevPlaylist = prevProps.data.playlistId;
    const prevSong = prevProps.data.songIndex;

    if (!loading) {
      if (prevSong !== songIndex || prevPlaylist !== playlistId) {
        this._player.pause();
        this._player.load();

        if (this.props.data.playerState === 'play') this._player.play();
      }

      this._player.volume = this.props.data.volume / 100;
    }
  };

  updateTime = timestamp => {
    const currentTime = Math.floor(timestamp);

    this.setState({ currentTime });
  };

  handleProgress = event => {
    const currentTime = Math.floor(this._player.duration * event.currentTarget.value / 100);

    this.updateTime(currentTime);
    this._player.currentTime = currentTime;
  };

  clearPlayer = () => {
    clearInterval(this._interval);
    this._player.currentTime = 0;
    this._player.removeEventListener('ended', this.handleNextSong);

    this.setState({
      currentTime: 0,
      songDuration: 0
    });
  };

  startProgressBar = () => {
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

    if (playerState === 'play') {
      this._player.pause();
      clearInterval(this._interval);
      client.writeData({ data: { playerState: 'pause' } });
    } else {
      this._player.play();
      this.startProgressBar();
      client.writeData({ data: { playerState: 'play' } });
    }
  }

  handleStop = () => {
    this._player.pause();
    this.clearPlayer();

    client.writeData({
      data: {
        songIndex: 0,
        playerState: 'stop'
      }
    });
  }

  toggleMute = () => { client.writeData({ data: { muted: !this.props.data.muted } }); }
  toggleRepeat = () => { client.writeData({ data: { repeat: !this.props.data.repeat } }); }

  // toggleRandom = () => {
  //   console.log('Handle Random');

  //   if (!this.state.random) { this.setRandomOrders(); }

  //   this.setState({ random: !this.state.random });
  //   client.writeData({ data: { random: !this.props.data.random } })
  // }

  handleNextSong = () => {
    const { songIndex, playlistId, playerState, repeat } = this.props.data;

    if (!repeat) {
      const nextSong = songIndex + 1;

      if (nextSong < playlists[playlistId].length) {
        client.writeData({
          data: {
            songIndex: nextSong,
            playerState: 'play'
          }
        });
      } else if (playerState !== 'stop') {
        this.handleStop();
      }
    }

    this.clearPlayer();
    this.startProgressBar();
  }

  handlePrevSong = () => {
    const { songIndex, repeat } = this.props.data;

    if (!repeat && songIndex > 0) {
      const nextSong = songIndex - 1;

      client.writeData({
        data: {
          songIndex: nextSong,
          playerState: 'play'
        }
      });
    }

    this.clearPlayer();
    this.startProgressBar();
  }

  handleVolume = event => {
    client.writeData({
      data: {
        muted: false,
        volume: event.currentTarget.value
      }
    });
  }

  render() {
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
          <Toggle
            onClick={() => {
              client.writeData({
                data: {
                  activePlayer: !activePlayer,
                }
              });
            }}
          >
            <Chevron />
            {activePlayer && <span className="p-small">Now playing</span>}
            {!activePlayer && (<SongInfo song={song} variant="small" />)}
          </Toggle>
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
            // stop={this.handleStop}
            play={this.handlePlay}
            handleNextSong={this.handleNextSong}
            handlePrevSong={this.handlePrevSong}
            handleVolume={this.handleVolume}
            toggleMute={this.toggleMute}
            toggleRepeat={this.toggleRepeat}
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
