import styled from 'styled-components';

import { colors, space } from '../../../styles';

const inputStyles = `
  background-color: blue
`;

const ProgressBarStyled = styled.div`
  margin: ${space()} 0 ${space(1.5)};
  
  .progress-bar {
    &__info {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default ProgressBarStyled;
