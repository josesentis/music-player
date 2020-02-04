import styled from 'styled-components';

import { colors, hexToRgb, space } from '../../styles';
import { TOGGLE_HEIGHT } from '../Player/styles';

const { r, g, b } = hexToRgb(colors.neutro[700]);
const tagColor = hexToRgb(colors.neutro[500]);

const PlaylistStyled = styled.div`
  height: 100vh;
  overflow-y: auto;
  width: 100vw;

  .hero {
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    height: 35vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  .content {
    background-image: linear-gradient(180deg, rgba(${r}, ${g}, ${b}, 0.4), rgba(${r}, ${g}, ${b}, 0.6) 16%, rgba(${r}, ${g}, ${b}, 0.8) 20%, rgba(${r}, ${g}, ${b}, 0.9) 22%, ${colors.neutro[700]} 26%);
    padding-bottom: ${TOGGLE_HEIGHT}px;
    padding-top: 25vh;
    position: relative;
    z-index: 1;

    ul {
      padding: ${space()} 0 ${space(.25)};

      li { margin-bottom: 0; }
    }
  }
`;

const Song = styled.button`
  display: flex;
  margin-bottom: 0;
  padding: ${space()} ${space(1.25)} 0;
  width: 100%;

  .index {
    min-width: 50px;
    margin-top: 2px;
  }

  .text {
    display: block;
    flex-grow: 1;
    padding-bottom: ${space(.5)};

    li:not(:last-child) & { border-bottom: 1px solid rgba(${tagColor.r}, ${tagColor.g}, ${tagColor.b}, 0.5); }
  }

  .active & {
    background-color: rgba(${tagColor.r}, ${tagColor.g}, ${tagColor.b}, 0.1);

    .index { color: ${colors.neutro[100]}; }
  }
`;

export default PlaylistStyled;
export { Song };
