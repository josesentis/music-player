import styled from 'styled-components';

import { colors, hexToRgb } from '../../styles';

const rgb = hexToRgb(colors.neutro[900]);

const PlayerStyled = styled.div`
  color: ${colors.neutro[100]};
  height: 100vh;
  max-height: 667px;
  max-width: 375px;
  overflow: hidden;
  position: relative;
  width: 100vw;

  .background {
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    bottom: 0;
    content: '';
    filter: blur(8px);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(1.2);
    z-index: 0;
  }

  .content {
    background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .8);
    height: 100%;
    position: relative;
    z-index: 1;
  }
`;

export default PlayerStyled;
