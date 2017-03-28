import React from 'react';

class Player extends React.Component {

	constructor() {
		super();

		this.state = {
			imgsrc : "./images/jamiexx.jpg",
			artist : "Jamie XX",
			song : "Gosh",
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
			</div>
		);
	}

}

export default Player;
