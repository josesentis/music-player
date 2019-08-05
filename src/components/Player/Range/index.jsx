import React from 'react';

import RangeStyled from './styles';

const Range = ({ onChange, value }) => (
  <RangeStyled
    type="range"
    name="progress"
    step="1"
    onChange={onChange}
    value={value}
    max="100"
  />
);

export default Range;
