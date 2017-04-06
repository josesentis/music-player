import React from 'react';

class Player extends React.Component {

	constructor() {
		super();
		this.state = {
		}
	}
	componentWillReceiveProps(newProps) {
		switch (newProps.playing) {
			case 'play':

				this._player.play();
				break;
			case 'pause':

				this._player.pause();
				break;
			case 'stop':

				this._player.pause();
				this._player.currentTime = 0;
				break;
		}
		if(newProps.volume){
			this._player.volume = newProps.volume;
		}
	}
	render() {
		return (
			<div>
				<header id="songImage">
					<img src={this.props.song.imgsrc} alt={this.props.song.title}/>
				</header>
				<div>
					{this.props.song.singer} - {this.props.song.title}
				</div>
				<audio id="player" muted={this.props.muted} ref={(el) => {this._player = el;}}>
					<source src={this.props.song.audiosrc} type="audio/mp3"/>
				</audio>
			</div>
		);
	}
}

export default Player;
