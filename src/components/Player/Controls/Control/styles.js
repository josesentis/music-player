import styled from 'styled-components';

import { space, gradient } from '../../../../styles';

const btnSize = 30;

const ControlStyled = styled.button`
  padding: ${space(.5)};

  svg {
    height: ${btnSize}px;
    width: ${btnSize}px;
  }

  &.large {
    svg {
      height: ${btnSize * 1.25}px;
      width: ${btnSize * 1.25}px;
    }

    background-image: ${gradient};
    border-radius: 50%;
  }

  &.small {
    opacity: .8;

    svg {
      height: ${btnSize * 0.75}px;
      width: ${btnSize * 0.75}px;
    }
  }
`;

export default ControlStyled;