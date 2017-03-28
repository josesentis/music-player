import React from 'react';
import {render} from 'react-dom';
import Player from './Player.jsx';

class App extends React.Component {
  render () {
    return (
		<div>
			<p> Hello React!</p>
			<Player />
		</div>
	);
  }
}

render(<App/>, document.getElementById('app'));
