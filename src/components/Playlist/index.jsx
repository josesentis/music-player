import React from "react";
import { graphql, withApollo } from 'react-apollo';

import { client } from '../../apollo';
import playlists from '../../data/playlist.json';
import GET_PLAYER_STATE from './queries';
import PlaylistStyled, { Song } from './styles';

class Playlist extends React.PureComponent {
  formatSongIndex = index => index < 10 ? `0${index}` : index;

  render() {
    const {
      data: {
        songIndex,
        playlistId,
        loading
      }
    } = this.props;

    if (loading) return <p>Loading...</p>;

    const playlist = playlists[playlistId];

    console.log(playlist);

    return (
      <PlaylistStyled
        id="playlist"
        background={playlist.background}
      >
        <span className="hero"></span>
        <div className="content">
          <p className="p-big">{playlist.name}</p>
          <p className="tag">{playlist.list.length}</p>
          <ul>
            {playlist.list.map((song, index) =>
              <li key={index} className={songIndex === index ? 'active' : ''}>
                <Song
                  onClick={() => {
                    client.writeData({
                      data: {
                        songIndex: index,
                      }
                    });
                  }}
                >
                  <span className="index">{this.formatSongIndex(index + 1)}</span>
                  {song.singer} - {song.title}
                </Song>
              </li>
            )}
          </ul>
        </div>
      </PlaylistStyled>
    )
  };
}

export default graphql(GET_PLAYER_STATE, {
  options: () => ({
    fetchPolicy: 'cache-and-network'
  })
})(withApollo(Playlist));
