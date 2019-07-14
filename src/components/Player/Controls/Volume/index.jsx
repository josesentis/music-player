import React from 'react';

class Volume extends React.PureComponent {
  render() {
    const { onChange, muted, value } = this.props;

    return (
      <input
        type="range"
        name="volume"
        step="1"
        onChange={onChange}
        value={muted ? 0 : value}
        max="100"
      />
    );
  }
}

export default Volume;
