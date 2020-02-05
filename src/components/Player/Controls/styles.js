import styled from 'styled-components';

import { space } from '../../../styles';

const ControlsStyled = styled.div`
  padding: 0 ${space()};
  margin: ${space()} 0;

  .controls {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: ${space()} 0;

    &--stretch { justify-content: space-between; }

    > * {
      margin: 0 ${space(.75)};

      &:first-child { margin-left: 0; }
      &:last-child { margin-right: 0; }
    }
  }

  .progress-bar { flex-grow: 1; }

  .volume {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    .range { margin-top: -9px; }
  }
`;

export default ControlsStyled;
