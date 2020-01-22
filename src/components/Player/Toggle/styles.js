import styled from 'styled-components';

import { colors, space } from '../../../styles';

const TOGGLE_HEIGHT = 48;

const ToggleStyled = styled.button`
  background-color: ${colors.neutro[900]};
  height: ${TOGGLE_HEIGHT}px;
  padding: 0 ${space()};
  position: relative;
  text-transform: uppercase;
  width: 100%;

  svg {
    fill: ${colors.neutro[100]};
    left: ${space()};
    position: absolute;
    transform: rotate(180deg);
    width: 20px;
  }

  .active & {
    background-color: transparent

    svg { transform: rotate(0deg); }
  }
`;

export default ToggleStyled;
export { TOGGLE_HEIGHT };
