import React from 'react';
import {render} from 'react-dom';
import Player from './Player.jsx';
import Playlist from './Playlist.jsx';

class App extends React.Component {
  render () {
    return (
		<div>
			<Player />
			<Playlist />
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));
