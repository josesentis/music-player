import React from "react";

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlaylistIndex: props.currentPlaylistIndex,
            currentSongIndex: props.currentSongIndex,
            playing: props.playing
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState({ playing: newProps.playing });
        this.setState({ currentPlaylistIndex: newProps.currentPlaylistIndex });
        this.setState({ currentSongIndex: newProps.currentSongIndex });
    }
    renderPlaylist(list, currentSongIndex, playing) {
        return list.map(function(item, index) {
            return (
                <li
                    key={index}
                    className={
                        parseInt(currentSongIndex) == index && playing != "stop"
                            ? "current"
                            : ""
                    }
                    data-audiosrc={item.audiosrc}
                    data-imgsrc={item.imgsrc}
                    data-order={index}
                >
                    {item.singer} - {item.title}
                </li>
            );
        });
    }
    renderMultiplePlaylist(currentPlaylistIndex, currentSongIndex, playing) {
        return this.props.playlist.map(
            function(item, index) {
                return (
                    <div
                        key={index}
                        className={
                            "playlist " +
                            (parseInt(currentPlaylistIndex) == index &&
                            playing != "stop"
                                ? "selected"
                                : "no-selected")
                        }
                    >
                        <p>{item.name}</p>
                        <ul>
                            {this.renderPlaylist(
                                item.list,
                                currentSongIndex,
                                playing
                            )}
                        </ul>
                    </div>
                );
            }.bind(this)
        );
    }
    render() {
        return (
            <div id="playlist" className="playlists">
                Playlist
                <div>
                    {this.renderMultiplePlaylist(
                        this.state.currentPlaylistIndex,
                        this.state.currentSongIndex,
                        this.state.playing
                    )}
                </div>
            </div>
        );
    }
}

export default Playlist;
