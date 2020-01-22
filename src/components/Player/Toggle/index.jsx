import React from 'react';
import { useQuery } from "@apollo/react-hooks";

import Chevron from '../../../assets/Chevron';

import GET_PLAYER_STATUS from './queries';
import ToggleStyled from './styles';

const Toggle = () => {
  const { data: { activePlayer }, client } = useQuery(GET_PLAYER_STATUS);

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
      {activePlayer && <span>Now playing</span>}
      {/* {!activePlayer && ()} */}
    </ToggleStyled>
  )
};

export default Toggle;
