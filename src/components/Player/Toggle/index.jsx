import React from 'react';
import { useQuery } from "@apollo/react-hooks";

import Chevron from '../../../assets/Chevron';

import GET_ACTIVE_PLAYER from './queries';
import ToggleStyled from './styles';

const Toggle = () => {
  const { data: { activePlayer }, client } = useQuery(GET_ACTIVE_PLAYER );

  return (
    <ToggleStyled
      onClick={() => {
        client.writeData({
          data: {
            activePlayer: !activePlayer,
          }
        });
      }}
    >
      <Chevron />
      <span>Now playing</span>
    </ToggleStyled>
  )
};

export default Toggle;
