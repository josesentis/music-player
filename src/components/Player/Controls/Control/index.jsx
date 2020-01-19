import React from 'react';

import Icon from '../../../Icon';

const Control = ({ onClick, icon = 'play' }) => (
  <button className="control" onClick={onClick}><Icon variant={icon} /></button>
);

export default Control;
