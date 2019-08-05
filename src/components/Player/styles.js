import styled from 'styled-components';

import { colors, space } from '../../styles';

const PlayerStyled = styled.div`
  background: ${colors.neutro.darkest};
  color: ${colors.neutro.lighter};
  height: 100vh;
  max-height: 667px;
  max-width: 375px;
  padding: ${space(.5)};
  width: 100vw;
`;

export default PlayerStyled;
