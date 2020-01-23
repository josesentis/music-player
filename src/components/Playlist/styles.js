import styled from 'styled-components';

import { colors, space } from '../../styles';

const PlaylistStyled = styled.div`
  background: red;
  height: 100vh;
  overflow-y: auto;
  padding-top: 25vh;
  width: 100vw;

  .hero {
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    height: 25vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
  }
`;

const Song = styled.button`
  display: block;
  padding: ${space()} ${space(.5)};
  width: 100%;

  li:not(:last-child) & { border-bottom: 1px solid ${colors.neutro[500]}; }

  .active & { background-color: ${colors.neutro[100]}; }
`;

export default PlaylistStyled;
export { Song };
