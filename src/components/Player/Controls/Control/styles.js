import styled from 'styled-components';

import { space } from '../../../../styles';

const btnSize = 50;

const ControlStyled = styled.button`
  height: ${btnSize}px;
  min-width: ${btnSize}px;
  padding: ${space(.5)};
  width: ${btnSize}px;

  svg {
    height: 100%;
    width: 100%;
  }

  &.large {
    height: ${btnSize * 1.25}px;
    min-width: ${btnSize * 1.25}px;
    width: ${btnSize * 1.25}px;
  }

  &.small {
    opacity: .8;

    svg {
      height: 75%;
      width: 75%;
    }
  }
`;

export default ControlStyled;
