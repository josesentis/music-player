import React from 'react';

const Volume = ({ onChange, muted, value }) => (
  <input
    type="range"
    name="volume"
    step="1"
    onChange={onChange}
    value={muted ? 0 : value}
    max="100"
  />
);

export default Volume;
