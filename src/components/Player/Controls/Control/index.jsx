import React from 'react';

import Icon from '../../../Icon';

import ControlStyled from './styles';

const Control = ({ onClick, icon = 'play', type = 'normal' }) => (
  <ControlStyled
    className={type}
    onClick={onClick}
  >
    <Icon variant={icon} />
  </ControlStyled>
);

export default Control;
