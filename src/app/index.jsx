import React from 'react';
import {render} from 'react-dom';
import Player from './Player.jsx';
import Playlist from './Playlist.jsx';
import myPlaylist from './playlist2.json';


/**
** TODO: Missing features / issues:
*
*	- Add button prev / next
*	- A song finished by itself. Next one starts
*	- Click random after listening to 3 songs. What happens? Investigate competence. (Visited songs don't play?)
*	- Test with different songs
*
**/
class App extends React.Component {
	constructor() {
		super();

		this.state = {
			playlist : myPlaylist.playlist,
			currentPlaylist : myPlaylist.playlist[0].list,
			currentPlaylistIndex: 0,
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
		//if random is set, second round -> start from 0
		//if random not set, song playing. Current song -> order 0.

		console.log("Set random orders");

		var tempIndexes = [];
		var tempOrder = [];

		if(this.state.random || this.state.playerState == "stop"){

			for(var i=0; i < this.state.currentPlaylist.length; i++){
				tempIndexes[i] = i;
			}
			for(var i=0; i < this.state.currentPlaylist.length; i++){
				var rand = Math.floor(Math.random()*tempIndexes.length);
				tempOrder[i] = tempIndexes[rand];
				tempIndexes.splice(rand, 1);
			}
			this.state.randomOrder = tempOrder;
		}else{

			for(var i=0; i < this.state.currentPlaylist.length; i++){
				tempIndexes[i] = i;
			}
			tempOrder[0] = this.state.currentSongIndex;
			tempIndexes.splice(this.state.currentSongIndex, 1);

			for(var i=0; i < this.state.currentPlaylist.length-1; i++){
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

		console.log("\n");
		console.log("-------- Play --------");
		console.log("Current state: ");
		console.log(this.state.playerState);

		event.preventDefault();

		if( this.state.playerState == 'stop'){

			if(this.state.random){
				this.setRandomOrders();
				this.setState({ currentSongIndex : this.state.randomOrder[0] });
				this.setState({ currentRandomIndex : 0 });
			}else{
				this.setState({ currentSongIndex : 0 });
			}
	  		this.setState({ playerState : 'play' });
			this.setState({ playedSongs : 0 });
		}else if( this.state.playerState == 'play'){
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
			//We are reordering (at the moment) all the songs, so we need to start again playing
			this.setState({ playedSongs : 0 });
		}else{
			//Random removed. Assume n - i songs left.
			this.setState({ playedSongs : this.state.currentSongIndex });
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

		console.log("\n");
		console.log("-------- Next --------");

		if(this.state.playerState != "stop"){

			console.log("!= stop");

			var nextSong;
			if(this.state.random){
				this.state.currentRandomIndex++;
				nextSong = this.state.randomOrder[this.state.currentRandomIndex];
			}else{
				nextSong = this.state.currentSongIndex + 1;
			}

			console.log("Next song: ");
			console.log(nextSong);

			console.log("Played songs: ");
			console.log(nextSong);

			if(this.state.playedSongs < this.state.currentPlaylist.length - 1){
				this.setState({ currentSongIndex : nextSong});
				this.state.playedSongs++;
			}else if(this.state.playedSongs == this.state.currentPlaylist.length - 1 && this.state.loop){

				//Init playlist when looping. Setting new random orders.
				if(this.state.random){
					this.setRandomOrders();
					this.setState({ currentSongIndex : this.state.randomOrder[0] });
					this.setState({ currentRandomIndex : 0 });
					this.setState({ playedSongs : 0});
				}else{
					this.setState({ currentSongIndex : 0});
					this.setState({ playedSongs : 0});
				}
			}else{


				console.log("Stopping");

				this.setState({ playerState : "stop" });
			}
		}
	}

	render () {

		console.log("\n");
		console.log("-------- Render --------");
		console.log("Next state: ");
		console.log(this.state.playerState);
		console.log("Current playlist: ");
		console.log(this.state.currentPlaylistIndex);
		console.log("Current song: ");
		console.log(this.state.currentSongIndex);
		console.log("playedSongs: ");
		console.log(this.state.playedSongs);
		console.log("Random: ");
		console.log(this.state.random);
		console.log("Loop: ");
		console.log(this.state.loop);

		return (
			<div>
				<Player song={this.state.playlist[this.state.currentPlaylistIndex].list[this.state.currentSongIndex]}
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
				<Playlist playlist={this.state.playlist}
					playing={this.state.playerState}
					currentSongIndex={this.state.currentSongIndex}
					currentPlaylistIndex={this.state.currentPlaylistIndex}
				/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
