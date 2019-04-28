import React from 'react';

class Controls extends React.Component {
  render = () => {
    return (
      <div id="controls">
        <div>
          <button onClick={this.props.play}>
            {this.props.playerState == 'play' ? 'pause' : 'play'}
            &nbsp;
					</button>
          <button onClick={this.props.stop}>
            stop &nbsp;
					</button>
          {/* <a href="" onClick={this.toggleRepeat}>
            repeat &nbsp;
					</a>
          <a href="" onClick={this.toggleRandom}>
            random &nbsp;
					</a> */}
          <button onClick={this.props.mute}>
            muted
					</button>
          {/* <input type="range" id="volume" name="volume" step="1"
            onChange={this.handleVolume} value={this.state.muted ? 0 : this.state.volume} max="100" /> */}
        </div>
        {/* <div>
          <a href="" onClick={this.handlePrevSong}>
            prev &nbsp;
					</a>
          <a href="" onClick={this.handleNextSong}>
            next
					</a>
        </div> */}
      </div>
    );
  }
}

export default Controls;
