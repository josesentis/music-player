import React from "react";
import { graphql, withApollo } from 'react-apollo';

import { client } from '../../apollo';
import playlists from '../../data/playlist.json';
import GET_PLAYER_STATE from './queries';
import PlaylistStyled from './styles';

class Playlist extends React.PureComponent {
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
      <PlaylistStyled id="playlist">
        <ul>
          {playlist.map((song, index) =>
            <li key={index} className={songIndex === index ? 'active' : ''}>
              <button
                onClick={() => {
                  client.writeData({
                    data: {
                      songIndex: index,
                    }
                  });
                }}
              >
                {song.singer} - {song.title}
              </button>
            </li>
          )}
        </ul>
      </PlaylistStyled>
    )
  };
}

export default graphql(GET_PLAYER_STATE, {
  options: () => ({
    fetchPolicy: 'cache-and-network'
  })
})(withApollo(Playlist));
