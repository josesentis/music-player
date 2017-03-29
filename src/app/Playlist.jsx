import React from 'react';
// import myPlaylist from './playlist.json';

class Playlist extends React.Component {

	constructor() {
		super();
		//
		// console.log(myPlaylist.playlist);
		// //
		// this.state = {
		// 	playlist : myPlaylist.playlist
		// }

		this.state = {
			playlist : [{
	   		 	"imgsrc" : "./images/jamiexx.jpg",
	   		 	"audiosrc" : "./audio/jamiexx-gosh.mp3",
	   		 	"artist" : "Jamie XX",
	   		 	"song" : "Gosh"
	   		 },
  		 	{
	   		 	"imgsrc" : "./images/jamiexx.jpg",
	   		 	"audiosrc" : "./audio/jamiexx-gosh.mp3",
	   		 	"artist" : "Jamie XX",
	   		 	"song" : "Gosh2"
	   		 },
  		 	{
	   		 	"imgsrc" : "./images/jamiexx.jpg",
	   		 	"audiosrc" : "./audio/jamiexx-gosh.mp3",
	   		 	"artist" : "Jamie XX",
	   		 	"song" : "Gosh3"
	    	}]
		}
	}

	render() {
		return (
			<div>
				<ul>
					<li data-audiosrc="{this.state.playlist[0].audiosrc}" data-imgsrc="{this.state.playlist[0].imgsrc}">
						{this.state.playlist[0].artist} - {this.state.playlist[0].song}
					</li>
					<li data-audiosrc="{this.state.playlist[1].audiosrc}" data-imgsrc="{this.state.playlist[1].imgsrc}">
						{this.state.playlist[1].artist} - {this.state.playlist[1].song}
					</li>
					<li data-audiosrc="{this.state.playlist[2].audiosrc}" data-imgsrc="{this.state.playlist[2].imgsrc}">
						{this.state.playlist[2].artist} - {this.state.playlist[2].song}
					</li>
				</ul>
			</div>
		);
	}

}

export default Playlist;
