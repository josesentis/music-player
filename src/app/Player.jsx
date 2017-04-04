import React from 'react';

class Player extends React.Component {

	constructor() {
		super();

		this.state = {
			// imgsrc : "./images/jamiexx.jpg",
			// audiosrc : "./audio/jamiexx-gosh.mp3",
			// singer : "Jamie XX",
			// title : "Gosh",
			playerState : "stop",
			// loop : false,
			random : false,
			muted : false,
			volume : 60,
			currentTime : 0,
			currentSongIndex : 0,
		}

		this.handlePlay = this.handlePlay.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.toggleRandom = this.toggleRandom.bind(this);
		this.toggleRepeat = this.toggleRepeat.bind(this);
		this.handleVolume = this.handleVolume.bind(this);
		this.handlePrevSong = this.handlePrevSong.bind(this);
		this.handleNextSong = this.handleNextSong.bind(this);
	}
	setSong(img, audio){

		this.setState({
			imgsrc : img,
			audiosrc : audio,
			singer : "Jamie XX",
			title : "Gosh",
		});

		this.setState({ playerState : 'play' });
		document.querySelector('#player source').src = audio;
		document.querySelector('#player').load();
		document.querySelector('#player').play();
		document.querySelector('#songImage img').src = img;
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
	stopPlayer(){
		this.setState({ playerState : 'stop' });
		document.getElementById('player').pause();
		document.getElementById('player').currentTime = 0;
	}
	finishPlaylist(){
		this.stopPlayer();
		document.querySelector('#playlist li.current').classList.remove('current');
	}
	startPlaylist(){
		if(this.state.random){
			document.querySelector('#playlist li[data-random="0"]').classList.add('current');
		}else{
			document.querySelector('#playlist li[data-order="0"]').classList.add('current');
		}
	}
	handlePlay(event){
		if(document.querySelector('#playlist li.current') == null){
			this.startPlaylist();
		}
		event.preventDefault();
		this.setState({ playerState : 'play' });
		document.getElementById('player').play();
	}
	handleStop(event){
		event.preventDefault();
		this.stopPlayer();
	}
	handlePause(event){
		event.preventDefault();
		if( this.state.playerState == 'play'){
			document.getElementById('player').pause();
			this.setState({ playerState : 'pause' });
		}else{
			this.setState({ playerState : 'play' });
			document.getElementById('player').play();
		}
	}
	// toggleRepeat(event){
	// 	event.preventDefault();
	// 	this.setState({ loop : !this.state.loop });
	// }
	toggleRandom(event){
		event.preventDefault();

		if(!this.state.random){
			this.setRandomOrders();
		}else{
			this.removeRandomOrders();
		}
		this.setState({ random : !this.state.random });
	}
	handleVolume(event){
		event.preventDefault();

		document.getElementById('player').volume = (parseInt(event.target.value) / 100);
		document.getElementById('volume').value = event.target.value;
		this.setState({ volume : event.target.value });
	}
	handlePrevSong(event){
		event.preventDefault();

		var prevInt = parseInt(document.querySelector('#playlist li.current').getAttribute('data-order'));
		prevInt--;

		if(document.querySelector('#playlist li[data-order="' + prevInt + '"]') != null && !this.state.random){

			var prevNode = document.querySelector('#playlist li[data-order="' + prevInt + '"]');

			var audio = prevNode.getAttribute('data-audiosrc');
			var img = prevNode.getAttribute('data-imgsrc');

			this.setSong(img, audio);

			document.querySelector('#playlist li.current').classList.remove('current');
			prevNode.classList.add("current");
		}
	}
	handleNextSong(event){

		if(this.state.playerState != "stop"){
			console.log("Next");

			event.preventDefault();

			var orderType = "";
			var nextInt;

			if(this.state.random){
				orderType = 'data-random';
			}else{
				orderType = 'data-order';
			}

			console.log(orderType);

			nextInt = parseInt(document.querySelector('#playlist li.current').getAttribute(orderType));
			nextInt++;

			console.log(nextInt);
			console.log(document.querySelector('#playlist li[' + orderType + '="' + nextInt + '"]'));

			if(document.querySelector('#playlist li[' + orderType + '="' + nextInt + '"]') != null){

				var nextNode = document.querySelector('#playlist li[' + orderType + '="' + nextInt + '"]');

				var audio = nextNode.getAttribute('data-audiosrc');
				var img = nextNode.getAttribute('data-imgsrc');

				this.setSong(img, audio);

				document.querySelector('#playlist li.current').classList.remove('current');
				nextNode.classList.add("current");
			}else if(this.state.loop){

				//Setting random order
				if(this.state.random){
					this.setRandomOrders();
				}

				var firstNode = document.querySelector('#playlist li[' + orderType + '="0"]');

				var audio = firstNode.getAttribute('data-audiosrc');
				var img = firstNode.getAttribute('data-imgsrc');

				this.setSong(img, audio);

				document.querySelector('#playlist li.current').classList.remove('current');
				firstNode.classList.add("current");
			}else{
				this.finishPlaylist();
			}
		}
	}
	render() {

		console.log(this.props.song);

		return (
			<div>
				<header id="songImage">
					<img src={this.props.song.imgsrc} alt="Jamie XX in colours"/>
				</header>
				<div>
					{this.props.song.singer} - {this.props.song.title}
				</div>
				<audio id="player">
					<source src={this.props.song.audiosrc} type="audio/mp3"/>
				</audio>
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
					 <input type="range" id="volume" name="volume" step="1"
						 onChange={this.handleVolume} value={this.state.volume} max="100"/>
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
		);
	}
}

export default Player;
