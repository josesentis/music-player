import styled from 'styled-components';

import { space } from '../../styles';

const ProgressBarStyled = styled.div`
  margin: ${space()} 0 ${space(1.5)};

  .info {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export default ProgressBarStyled;
