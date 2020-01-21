import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Chevron from '../../../assets/Chevron';

import { cache } from '../../../apollo';
import GET_ACTIVE_PLAYER from '../queries';
import ToggleStyled from './styles';

const Toggle = () => {
  const { data: { activePlayer } } = useQuery(GET_ACTIVE_PLAYER );

  return (
    <ToggleStyled
      onClick={() => {
        console.log(activePlayer, cache.data.data);

        cache.writeData({
          data: {
            activePlayer: !activePlayer,
          }
        });

        console.log(cache.data.data);
      }}
    >
      <Chevron />
      <span>Now playing</span>
    </ToggleStyled>
  )
};

export default Toggle;
