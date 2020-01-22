import React from 'react';

import Icon from '../../../Icon';

import ControlStyled from './styles';

const Control = ({ onClick, icon = 'play', type = 'normal', className = '' }) => (
  <ControlStyled
    className={`${type} ${className}`}
    onClick={event => {
      const _self = event.currentTarget;

      if (_self.classList.contains('toggle')) {
        _self.classList.toggle('active');
      }

      onClick(event);
    }}
  >
    <Icon variant={icon} />
  </ControlStyled>
);

export default Control;
