import React from 'react';
import {render} from 'react-dom';
import Player from './Player.jsx';
import Playlist from './Playlist.jsx';
import myPlaylist from './playlist.json';


/*
* TODO: Missing features:
*
*	- A song finished by itself
*	- Click random after listening to 3 songs. What happens? Investigate
*	- Provar cançons diferents
*/
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			playlist : myPlaylist.playlist,
			currentSongIndex: 0,
			currentRandomIndex: 0,
			playedSongs: 0,
			playerState : "stop",
			loop : false,
			random : false,
			muted : false,
			volume : 60,
			randomOrder : []
		}

		this.handlePlay = this.handlePlay.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.handleVolume = this.handleVolume.bind(this);
		this.toggleRandom = this.toggleRandom.bind(this);
		this.toggleRepeat = this.toggleRepeat.bind(this);
		this.toggleMuted = this.toggleMuted.bind(this);
		this.handlePrevSong = this.handlePrevSong.bind(this);
		this.handleNextSong = this.handleNextSong.bind(this);
	}
  	setRandomOrders(){

		console.log("Set random numbers");
		//if random is set, second round -> start from 0
		//if random not set, song playing. Current song -> order 0.
		var tempIndexes = [];
		var tempOrder = [];

		if(this.state.random || this.state.playerState == "stop"){

			for(var i=0; i < this.state.playlist.length; i++){
				tempIndexes[i] = i;
			}
			for(var i=0; i < this.state.playlist.length; i++){
				var rand = Math.floor(Math.random()*tempIndexes.length);
				tempOrder[i] = tempIndexes[rand];
				tempIndexes.splice(rand, 1);
			}
			this.state.randomOrder = tempOrder;
		}else{

			for(var i=0; i < this.state.playlist.length; i++){
				tempIndexes[i] = i;
			}
			tempOrder[0] = this.state.currentSongIndex;
			tempIndexes.splice(this.state.currentSongIndex, 1);

			for(var i=0; i < this.state.playlist.length-1; i++){
				var rand = Math.floor(Math.random()*(tempIndexes.length-1));
				tempOrder[i+1] = tempIndexes[rand];
				tempIndexes.splice(rand, 1);
			}
			this.state.randomOrder = tempOrder;
		}
		this.setState({ currentRandomIndex : 0 });
		this.setState({ currentSongIndex : this.state.currentSongIndex });
  	}
	handlePlay(event){
		event.preventDefault();
		if( this.state.playerState == 'play'){
	  		this.setState({ playerState : 'pause' });
		}else{
			this.setState({ playerState : 'play' });
		}
	}
	handleStop(event){
		event.preventDefault();
		this.setState({ playerState : 'stop' });
	}
	handleVolume(event){
		event.preventDefault();
		this.setState({ volume : event.target.value });
	}
	toggleRepeat(event){
		event.preventDefault();
		this.setState({ loop : !this.state.loop });
	}
	toggleMuted(event){
		event.preventDefault();
		this.setState({ muted : !this.state.muted });
	}
	toggleRandom(event){
		event.preventDefault();
		if(!this.state.random){
			this.setRandomOrders();
		}
		this.setState({ random : !this.state.random });
	}
	handlePrevSong(event){
		event.preventDefault();
		if(!this.state.random){
			if(this.state.currentSongIndex > 0){
				this.setState({ currentSongIndex : this.state.currentSongIndex - 1});
			}
			this.state.playedSongs--;
		}
	}
	handleNextSong(event){
		event.preventDefault();

		if(this.state.playerState != "stop"){

			console.log("next");

			var nextSong;

			if(this.state.random){
				console.log("Is random");

				this.state.currentRandomIndex++;
				nextSong = this.state.randomOrder[this.state.currentRandomIndex];
			}else{
				console.log("No random");
				nextSong = this.state.currentSongIndex + 1;
			}

			console.log("Next song: " + nextSong);

			if(this.state.playedSongs < this.state.playlist.length - 1){
				this.setState({ currentSongIndex : nextSong});
			}else if(this.state.currentSongIndex == this.state.playlist.length - 1 && this.state.loop){
				this.setState({ currentSongIndex : 0});
			}else{
				this.setState({ playerState : "stop" });
				this.setState({ currentSongIndex : 0});
			}
			this.state.playedSongs++;
		}
	}
  render () {
    return (
		<div>
			<Player song={this.state.playlist[this.state.currentSongIndex]}
			 	muted={this.state.muted}
				playing={this.state.playerState}
				volume={(this.state.volume / 100)}
			/>
			<div id="controls">
				<div>
					<a href="" onClick={this.handlePlay}>
						<i className={this.state.playerState == 'play' ? "fa fa-pause" : "fa fa-play"} aria-hidden="true"></i>
							{this.state.playerState == 'play' ? 'pause' : 'play'}
							&nbsp;
					</a>
					<a href="" onClick={this.handleStop}>
						<i className="fa fa-stop" aria-hidden="true"></i> stop
							&nbsp;
					</a>
					<a href="" onClick={this.toggleRepeat}>
						<i className="fa fa-repeat" aria-hidden="true"></i>
						repeat &nbsp;
					</a>
					<a href="" onClick={this.toggleRandom}>
						<i className="fa fa-repeat" aria-hidden="true"></i>
						random &nbsp;
					</a>
					<a href="" onClick={this.toggleMuted}>
						<i className="fa fa-repeat" aria-hidden="true"></i>
						muted
					</a>
					<input type="range" id="volume" name="volume" step="1"
						onChange={this.handleVolume} value={this.state.muted ? 0 : this.state.volume} max="100"/>
				</div>
				<div>
					<a href="" onClick={this.handlePrevSong}>
						<i className="fa fa-step-backward" aria-hidden="true"></i>
						prev
					</a>
					<a href="" onClick={this.handleNextSong}>
						<i className="fa fa-step-forward" aria-hidden="true"></i>
						next
					</a>
				</div>
			</div>
			<Playlist songs={this.state.playlist}
				playing={this.state.playerState}
				currentSongIndex={this.state.currentSongIndex}
			/>
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));
