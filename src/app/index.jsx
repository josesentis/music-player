import React from 'react';
import {render} from 'react-dom';
import Player from './Player.jsx';
import Playlist from './Playlist.jsx';
import myPlaylist from './playlist.json';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			playlist : myPlaylist.playlist,
			currentSongIndex: 0,
			playerState : "stop",
			loop : false,
			random : false,
			muted : false,
			volume : 60,
		}

		this.handlePlay = this.handlePlay.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.handlePause = this.handlePause.bind(this);
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

	  var songsList = document.querySelectorAll('#playlist li');
	  var randomOrder = [];

	  if(this.state.random || this.state.playerState == "stop"){

		  for(var i=0; i < songsList.length; i++){
			  randomOrder[i] = i;
		  }
		  songsList.forEach(function(item, index){
			  var rand = Math.floor(Math.random()*randomOrder.length);
			  item.setAttribute('data-random', randomOrder[rand]);
			  randomOrder.splice(rand, 1);
		  });
	  }else{

		  for(var i=0; i < songsList.length; i++){
			  randomOrder[i] = i;
		  }
		  randomOrder.splice(0, 1);

		  songsList.forEach(function(item, index){
			  var rand = Math.floor(Math.random()*randomOrder.length);

			  if(item.className.indexOf('current') > -1){
				  item.setAttribute('data-random', 0);
			  }else{
				  item.setAttribute('data-random', randomOrder[rand]);
				  randomOrder.splice(rand, 1);
			  }
		  });
	  }

	  document.querySelector('#playlist li.current').classList.remove('current')
	  document.querySelector('#playlist li[data-random="0"]').classList.add('current')
  }
	removeRandomOrders(){

		var songsList = document.querySelectorAll('#playlist li');
		songsList.forEach(function(item, index){
			item.removeAttribute('data-random');
		});
	}
	handlePlay(event){
		event.preventDefault();
		this.setState({ playerState : 'play' });
	}
	handlePause(event){
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
		}else{
			this.removeRandomOrders();
		}
		this.setState({ random : !this.state.random });
	}
	handlePrevSong(event){
		event.preventDefault();

		if(!this.state.random){
			if(this.state.currentSongIndex > 0){
				this.setState({ currentSongIndex : this.state.currentSongIndex - 1});
			}
		}
	}
	handleNextSong(event){
		event.preventDefault();

		if(this.state.playerState != "stop"){

			if(this.state.currentSongIndex < this.state.playlist.length - 1){
				this.setState({ currentSongIndex : this.state.currentSongIndex + 1});
			}else if(this.state.currentSongIndex == this.state.playlist.length - 1 && this.state.loop){
				this.setState({ currentSongIndex : 0});
			}else{
				this.setState({ playerState : "stop" });
				this.setState({ currentSongIndex : 0});
			}
		//   var orderType = "";
		//   var nextInt;
		  //
		//   if(this.state.random){
		// 	  orderType = 'data-random';
		//   }else{
		// 	  orderType = 'data-order';
		//   }

		//   console.log(orderType);

		//   nextInt = parseInt(document.querySelector('#playlist li.current').getAttribute(orderType));
		//   nextInt++;
		  //
		//   console.log(nextInt);
		//   console.log(document.querySelector('#playlist li[' + orderType + '="' + nextInt + '"]'));
		  //
		//   if(document.querySelector('#playlist li[' + orderType + '="' + nextInt + '"]') != null){
		  //
		// 	  var nextNode = document.querySelector('#playlist li[' + orderType + '="' + nextInt + '"]');
		  //
		// 	  var audio = nextNode.getAttribute('data-audiosrc');
		// 	  var img = nextNode.getAttribute('data-imgsrc');
		  //
		// 	  this.setSong(img, audio);
		  //
		// 	  document.querySelector('#playlist li.current').classList.remove('current');
		// 	  nextNode.classList.add("current");
		//   }else if(this.state.loop){
		  //
		// 	  //Setting random order
		// 	  if(this.state.random){
		// 		  this.setRandomOrders();
		// 	  }
		  //
		// 	  var firstNode = document.querySelector('#playlist li[' + orderType + '="0"]');
		  //
		// 	  var audio = firstNode.getAttribute('data-audiosrc');
		// 	  var img = firstNode.getAttribute('data-imgsrc');
		  //
		// 	  this.setSong(img, audio);
		  //
		// 	  document.querySelector('#playlist li.current').classList.remove('current');
		// 	  firstNode.classList.add("current");
		//   }
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
						<i className="fa fa-play" aria-hidden="true"></i> play
							&nbsp;
					</a>
					<a href="" onClick={this.handleStop}>
						<i className="fa fa-stop" aria-hidden="true"></i> stop
							&nbsp;
					</a>
					<a href="" onClick={this.handlePause}>
						<i className="fa fa-pause" aria-hidden="true"></i> pause
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
