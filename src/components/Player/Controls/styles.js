import styled from 'styled-components';

import { space } from '../../../styles';

const btnSize = 45;

const ControlsStyled = styled.div`
  padding: ${space(.5)};

  .progress,
  .volume {
    align-items: center;
    display: flex;
    justify-content: space-between;

  }

  .progress-bar {
    flex-grow: 1;
    margin: 0 ${space()};
  }

  .control {
    height: ${btnSize}px;
    min-width: ${btnSize}px;
    padding: ${space(.5)};
    width: ${btnSize}px;

    svg {
      height: 100%;
      width: 100%;
    }
  }
`;

export default ControlsStyled;
