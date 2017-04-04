import React from 'react';
import {render} from 'react-dom';
import Player from './Player.jsx';
import Playlist from './Playlist.jsx';
// import myPlaylist from './playlist.json';

class App extends React.Component {
  constructor() {
	  super();

	  //
	  // console.log(myPlaylist.playlist);
	  // //
	  // this.state = {
	  // 	playlist : myPlaylist.playlist
	  // }

	  this.state = {
  			playlist: [{
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
  	    	}],
			currentSongIndex: 0
	  }
  }
  render () {
    return (
		<div>
			<Player />
			<Player song={this.state.playlist[this.state.currentSongIndex]} />
			<Playlist songs={this.state.playlist} />
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));
