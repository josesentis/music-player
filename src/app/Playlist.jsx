import React from 'react';

class Playlist extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			currentSongIndex : props.currentSongIndex,
			playing : props.playing
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({ playing : newProps.playing });
		this.setState({ currentSongIndex : newProps.currentSongIndex });
	}

	renderPlaylist(currentSongIndex, playing) {
		//
		// console.log("currentSongIndex");
		// console.log(currentSongIndex);

		return this.props.songs.map(function(item, index){

			// console.log("index");
			// console.log(index);

			return (
				<li key={index}
					className={parseInt(currentSongIndex) == index && playing != "stop" ? 'current' : ''}
					data-audiosrc={item.audiosrc}
					data-imgsrc={item.imgsrc}
					data-order={index}>
					{item.singer} - {item.title}
				</li>
			);
		});
	}
	render() {
		return (
			<div id="playlist">
				Playlist
				<ul>
					{this.renderPlaylist(this.state.currentSongIndex, this.state.playing)}
				</ul>
			</div>
		);
	}
}

export default Playlist;
