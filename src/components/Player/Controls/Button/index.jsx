import React from 'react';

import Play from '../../../../assets/Play';

import ButtonStyled from './styles';

const Button = ({ onClick, icon }) => {
  // console.log(icon);
  // const buttonType = {
  //   play: Play,
  //   muted: Mute,
  //   next: Next,
  //   prev: Prev,
  //   pause: Pause,
  //   random: Random,
  //   volumeHeight: VolumeHeight,
  //   volumeLow: VolumeLow,
  // };
  // const Component = buttonType[icon];

  return (
    <ButtonStyled onClick={onClick}><Play /></ButtonStyled>
    // <ButtonStyled onClick={onClick}> { icon } </ButtonStyled>
  );
};

export default Button;
