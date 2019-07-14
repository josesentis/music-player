import React from 'react';

class SongInfo extends React.PureComponent {
  render() {
    const { song } = this.props;

    return (
      <header>
        <img
          src={song.img}
          alt={song.title}
        />
        <h1>
          {song.singer} - {song.title}
        </h1>
      </header>
    );
  }
};

export default SongInfo;
