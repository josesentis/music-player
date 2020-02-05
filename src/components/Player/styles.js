import styled from 'styled-components';

import { colors, hexToRgb, space } from '../../styles';

const rgb = hexToRgb(colors.neutro[900]);
const TOGGLE_HEIGHT = 48;

const PlayerStyled = styled.div`
  color: ${colors.neutro[100]};
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: calc(100% - ${TOGGLE_HEIGHT}px);
  width: 100%;
  z-index: 1;

  &.active { top: 0; }

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
    background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .6);
    height: 100%;
    position: relative;
    z-index: 1;
  }
`;

const Toggle = styled.div`
  align-items: center;
  background-color: ${colors.neutro[900]};
  display: flex;
  height: ${TOGGLE_HEIGHT}px;
  padding: 0 ${space()};
  position: relative;
  width: 100%;

  .active & { justify-content: center; }
  .song-info { margin: 0 ${space(2)}; }

  .icon,
  button {
    position: absolute;
    top: 50%;
  }

  .icon {
    fill: ${colors.neutro[100]};
    left: ${space()};
    transform: translate(0, -50%) rotate(180deg);
    width: 20px;
  }

  button {
    padding: 0;
    right: ${space()};
    transform: translate(0, -50%);
  }

  .active & {
    background-color: transparent
    text-align: center
    text-transform: uppercase;

    svg { transform: translate(0, -50%) rotate(0deg); }
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
  }
`;

export default PlayerStyled;
export { Toggle, TOGGLE_HEIGHT };
