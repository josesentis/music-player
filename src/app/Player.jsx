import React from 'react';

class Player extends React.Component {

	constructor() {
		super();

		// var firstSong = {
		// 	img : "",
		// 	artist : "",
		// 	title : "",
		// 	audio : ""
		// }

		// firstSong.audio = document.querySelector('#playlist li.current').getAttribute('audiosrc');
		// firstSong.img = document.querySelector('#playlist li.current').getAttribute('imgsrc');
		// firstSong.singer = document.querySelector('#playlist li.current').getAttribute('audiosrc');
		// firstSong.img = document.querySelector('#playlist li.current').getAttribute('audiosrc');

		this.state = {
			imgsrc : "./images/jamiexx.jpg",
			audiosrc : "./audio/jamiexx-gosh.mp3",
			singer : "Jamie XX",
			songtitle : "Gosh",
			playerState : "stop",
			loop : false,
			muted : false,
			volume : 60,
			currentTime : 0,
		}
		this.handlePlay = this.handlePlay.bind(this);
		this.handleStop = this.handleStop.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.toggleRepeat = this.toggleRepeat.bind(this);
		this.handleVolume = this.handleVolume.bind(this);
		this.handlePrevSong = this.handlePrevSong.bind(this);
		this.handleNextSong = this.handleNextSong.bind(this);


		//Falta onload, setejar el volum (input) al constructor
	}
	handlePlay(event){
		event.preventDefault();
    	this.setState({ playerState : 'play' });
		document.getElementById('player').play();
	}
	handleStop(event){
		event.preventDefault();
		this.setState({ playerState : 'stop' });
		document.getElementById('player').pause();
		document.getElementById('player').currentTime = 0;
	}
	handlePause(event){
		event.preventDefault();
		this.setState({ playerState : 'pause' });
		document.getElementById('player').pause();
	}
	toggleRepeat(event){
		event.preventDefault();
		this.setState({ loop : !this.state.loop });
		document.getElementById('player').setAttribute('loop', this.state.loop);
	}
	handleVolume(event){
		event.preventDefault();

		document.getElementById('player').volume = (parseInt(event.target.value) / 100);
		document.getElementById('volume').value = event.target.value;
		this.setState({ volume : event.target.value });
	}
	handlePrevSong(event){
		event.preventDefault();

		var audio = document.querySelector('#playlist li.current').previousSibling.getAttribute('data-audiosrc');
		var img = document.querySelector('#playlist li.current').previousSibling.getAttribute('data-imgsrc');

		this.setState({
			imgsrc : img,
			audiosrc : audio,
			singer : "Jamie XX",
			songtitle : "Gosh",
		});

		document.querySelector('#playlist li.current').previousSibling.classList.add("current");
		document.querySelector('#playlist li.current').classList.remove('current');

		this.setState({ playerState : 'play' });
		document.querySelector('#player source').src = audio;
		document.querySelector('#player').load();
		document.querySelector('#player').play();

		document.querySelector('#songImage img').src = img;
	}
	handleNextSong(event){
		event.preventDefault();

		var audio = document.querySelector('#playlist li.current').nextSibling.getAttribute('data-audiosrc');
		var img = document.querySelector('#playlist li.current').nextSibling.getAttribute('data-imgsrc');

		this.setState({
			imgsrc : img,
			audiosrc : audio,
			singer : "Jamie XX",
			songtitle : "Gosh",
		});

		document.querySelector('#playlist li.current').nextSibling.classList.add("current");
		document.querySelector('#playlist li.current').classList.remove('current');

		this.setState({ playerState : 'play' });
		document.querySelector('#player source').src = audio;
		document.querySelector('#player').load();
		document.querySelector('#player').play();

		document.querySelector('#songImage img').src = img;
	}
	render() {
		return (
			<div>
				<header id="songImage">
					<img src={this.state.imgsrc} alt="Jamie XX in colours"/>
				</header>
				<div>
					{this.state.singer} - {this.state.songtitle}
				</div>
				<audio id="player">
					<source src={this.state.audiosrc} type="audio/mp3"/>
				</audio>
				<div>
					<a href="" onClick={this.handlePlay}>
						<i className="fa fa-play" aria-hidden="true"></i> &nbsp;
					</a>
					<a href="" onClick={this.handleStop}>
						<i className="fa fa-stop" aria-hidden="true"></i> &nbsp;
					</a>
					<a href="" onClick={this.handlePause}>
						<i className="fa fa-pause" aria-hidden="true"></i> &nbsp;
					</a>
					<a href="" onClick={this.toggleRepeat}>
						<i className="fa fa-repeat" aria-hidden="true"></i>
					</a>
					 <input type="range" id="volume" name="volume" step="1" onChange={this.handleVolume} value="{this.state.volume}" max="100"/>
				</div>
				<div>
					<a href="" onClick={this.handlePrevSong}>
						<i className="fa fa-step-backward" aria-hidden="true"></i>
					</a>
					<a href="" onClick={this.handleNextSong}>
						<i className="fa fa-step-forward" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		);
	}
}

export default Player;
