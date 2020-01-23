import React from 'react';

import Icon from '../Icon';

import ButtonStyled from './styles';

const Button = ({ onClick, icon = 'play', type = 'normal', className = '' }) => (
  <ButtonStyled
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
  </ButtonStyled>
);

export default Button;
