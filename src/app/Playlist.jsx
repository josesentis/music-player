import React from 'react';

class Playlist extends React.Component {

	constructor() {
		super();
	}

	renderPlaylist() {
		return this.props.songs.map(function(item, index){
			return (
				<li key={index} data-audiosrc={item.audiosrc}
					data-imgsrc={item.imgsrc} data-order={index}>
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
					{this.renderPlaylist()}
				</ul>
			</div>
		);
	}
}

export default Playlist;
