import styled from 'styled-components';

import { colors, space } from '../../../styles';

/**
 * TODO: Space evenly the items here (For > iPhone 5)
 * Controls always same size, this spaced evenly
*/

const SongInfoStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;

  .song-info {
    &__header {
      align-items: center;
      position: relative;
      display: flex;
      height: 40px;
      justify-content: center;
      width: 100%;
    }
    
    &__toggle {
      background: transparent;
      height: 40px;
      left: 0;
      position: absolute;
      top: 0;
      width: 40px;
      z-index: 1;

      svg {
        fill: ${colors.neutro.lightest};
      }
    }
    
    &__img {
      border-radius: 50%;
      overflow: hidden;
      padding: ${space()} ${space(.5)};

      img {
        height: 100%;
        border-radius: 50%;
        width: 100%;
      }
    }
  }
`;

export default SongInfoStyled;
