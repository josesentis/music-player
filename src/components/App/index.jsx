import React from 'react';
import 'normalize.css';

import Player from '../Player';

import GlobalStyle from '../../styles/global';
import { AppWrapper } from './styles';

class App extends React.Component {
  componentDidMount() {
    this.touchable();
  }

  touchable() {
    const typedWindow = window || null;
    const touchsupport =
      'ontouchstart' in typedWindow ||
      typedWindow.navigator.maxTouchPoints > 0 ||
      typedWindow.navigator.msMaxTouchPoints > 0;
    const touchClass = touchsupport ? 'touch' : 'non-touch';

    document.documentElement.classList.add(touchClass);
  }

  render = () => {
    return (
      <AppWrapper>
        <GlobalStyle />
        <Player />
      </AppWrapper>
    );
  }
}

export default App;
