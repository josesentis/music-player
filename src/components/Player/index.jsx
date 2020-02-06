import React from "react";
import { graphql, withApollo } from 'react-apollo';

import Chevron from '../../assets/Chevron';
import Button from '../Button';
import ProgressBar from '../ProgressBar';
import Controls from './Controls';
import SongInfo from './SongInfo';

import { client } from '../../apollo';
import { shuffle } from '../../utils';
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

  setRandomOrders = () => {
    const { playerState } = this.props.data;

    let randomOrders;

    if (playerState !== "stop") {
      const tempplaylist = this.state.playlist.slice();

      randomOrders = tempplaylist.splice(this.state.songIndex, 1);
      randomOrders = [...randomOrders, ...shuffle(tempplaylist)];
    } else {
      randomOrders = shuffle(this.state.playlist);
    }

    this.setState({ randomOrders });
  }

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

  toggleRandom = () => {
    if (!this.state.random) { this.setRandomOrders(); }

    client.writeData({ data: { random: !this.props.data.random } });
  }

  handleNextSong = () => {
    const { songIndex, playlistId, playerState, repeat } = this.props.data;

    if (!repeat) {
      const nextSong = songIndex + 1;

      if (nextSong < playlists[playlistId].list.length) {
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
        playerState,
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

    const song = playlists[playlistId].list[songIndex];

    return (
      <PlayerStyled
        id="player"
        background={song.img}
        className={activePlayer ? 'active' : ''}
      >
        <span className="background"></span>
        <div className="content">
          <Toggle
            role="button"
            onClick={() => {
              client.writeData({
                data: {
                  activePlayer: !activePlayer,
                }
              });
            }}
          >
            <Chevron className="icon" />
            {activePlayer && <span className="p-small">Now playing</span>}
            {!activePlayer && (
              <>
                <ProgressBar
                  onChange={this.handleProgress}
                  currentTime={currentTime}
                  songDuration={songDuration}
                  name='toggle-progress'
                  variant='small'
                />
                <SongInfo song={song} variant="small" />
                <Button
                  onClick={event => {
                    event.stopPropagation();
                    this.handlePlay();
                  }}
                  icon={playerState === 'play' ? 'pause' : 'play'}
                />
              </>
            )}
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
            handlePlay={this.handlePlay}
            handleNextSong={this.handleNextSong}
            handlePrevSong={this.handlePrevSong}
            handleVolume={this.handleVolume}
            toggleMute={this.toggleMute}
            toggleRepeat={this.toggleRepeat}
            muted={muted}
            playerState={playerState}
            {...this.props.data}
          />
        </div>
      </PlayerStyled>
    );
  };
}

export default graphql(GET_PLAYER_STATE, {
  options: () => ({
    fetchPolicy: 'cache-and-network'
  })
})(withApollo(Player));
