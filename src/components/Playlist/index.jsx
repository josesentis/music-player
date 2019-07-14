import React from "react";

class Playlist extends React.PureComponent {
  render () {
    const { currentIndex, handleSongChange, playlist } = this.props;

    return (
      <div className="playlists">
        <h2>Playlist</h2>
        <ul>
          {playlist.map((song, index) =>
            <li key={index} className={currentIndex === index ? 'active' : ''}>
              <button onClick={() => handleSongChange(index)}>{song.singer} - {song.title}</button>
            </li>
          )}
        </ul>
      </div>
    )};
  }

export default Playlist;
