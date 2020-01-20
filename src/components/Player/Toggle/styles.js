import styled from 'styled-components';

import { colors, space } from '../../../styles';

const ToggleStyled = styled.button`
  height: 48px;
  padding: 0 ${space()};
  position: relative;
  text-transform: uppercase;
  width: 100%;

  svg {
    fill: ${colors.neutro.lightest};
    left: ${space()};
    position: absolute;
    transform: rotate(180deg);
    width: 20px;
  }

  .active & svg { transform: rotate(0deg); }
`;

export default ToggleStyled;
