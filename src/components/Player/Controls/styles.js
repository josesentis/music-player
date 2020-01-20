import styled from 'styled-components';

import { space } from '../../../styles';

const ControlsStyled = styled.div`
  padding: ${space()};

  .controls {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .progress-bar { flex-grow: 1; }
`;

export default ControlsStyled;
