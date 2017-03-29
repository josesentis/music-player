import React from 'react';

class Player extends React.Component {

	constructor() {
		super();

		this.state = {
			imgsrc : "./images/jamiexx.jpg",
			audiosrc : "./audio/jamiexx-gosh.mp3",
			artist : "Jamie XX",
			song : "Gosh"
		}
	}

	render() {
		return (
			<div>
				<header>
					<img src={this.state.imgsrc} alt="Jamie XX in colours"/>
				</header>
				<div>
					{this.state.artist} - {this.state.song}
				</div>
				<audio controls autoPlay>
					<source src={this.state.audiosrc} type="audio/mp3"/>
				</audio>
			</div>
		);
	}

}

export default Player;
