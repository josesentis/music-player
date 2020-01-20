import styled from 'styled-components';

import { space, colors, hexToRgb } from '../../../styles';

const rgb = hexToRgb(colors.neutro[700]);
const imgSize = 180;
const increment = 50;

/**
 * TODO: Space evenly the items here (For > iPhone 5)
 * Controls always same size, this spaced evenly
*/
const SongInfoStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${space()} 0;
  padding: 0 ${space()};
  position: relative;
  text-align: center;

  .cover {
    border-radius: 50%;
    margin: ${space(2)} 0 ${space(4)};
    position: relative;

    &::before,
    &::after {
      background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .4);
      border-radius: 50%;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }

    &::before {
      height: ${imgSize + increment * 2}px;
      width: ${imgSize + increment * 2}px;
      z-index: 0;
    }

    &::after {
      height: ${imgSize + increment}px;
      width: ${imgSize + increment}px;
      z-index: 1;
    }

    img {
      height: ${imgSize}px;
      border-radius: 50%;
      position: relative;
      width: ${imgSize}px;
      z-index: 2;
    }
  }
`;

export default SongInfoStyled;
