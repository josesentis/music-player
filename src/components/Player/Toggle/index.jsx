import React from 'react';

import Chevron from '../../../assets/Chevron';

import ToggleStyled from './styles';

const Toggle = () => (
  <ToggleStyled
    onClick={e => { e.currentTarget.parentElement.classList.toggle('active') }}
  >
    <Chevron />
    <span>Now playing</span>
  </ToggleStyled>
);

export default Toggle;
