import React from 'react';

class Controls extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			playerState: props.playerState
		}

		this.handlePlay = props.handlePlay;
		this.handleStop = props.handleStop;
		this.handleVolume = props.handleVolume;
		this.toggleRandom = props.toggleRandom;
		this.toggleRepeat = props.toggleRepeat;
		this.toggleMuted = props.toggleMuted;
		this.handlePrevSong = props.handlePrevSong;
		this.handleNextSong = props.handleNextSong;
	}
	componentWillReceiveProps(newProps) {
        this.setState({ playerState: newProps.playerState });
    }
	render() {
		return (
			<div id="controls">
				<div>
					<a href="" onClick={this.handlePlay}>
						{this.state.playerState == 'play' ? 'pause' : 'play'}
						&nbsp;
					</a>
					<a href="" onClick={this.handleStop}>
						stop &nbsp;
					</a>
					<a href="" onClick={this.toggleRepeat}>
						repeat &nbsp;
					</a>
					<a href="" onClick={this.toggleRandom}>
						random &nbsp;
					</a>
					<a href="" onClick={this.toggleMuted}>
						muted
					</a>
					<input type="range" id="volume" name="volume" step="1"
						onChange={this.handleVolume} value={this.state.muted ? 0 : this.state.volume} max="100"/>
				</div>
				<div>
					<a href="" onClick={this.handlePrevSong}>
						prev &nbsp;
					</a>
					<a href="" onClick={this.handleNextSong}>
						next
					</a>
				</div>
			</div>
		);
	}
}

export default Controls;
