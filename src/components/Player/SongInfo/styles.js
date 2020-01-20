import styled from 'styled-components';

import { space } from '../../../styles';

/**
 * TODO: Space evenly the items here (For > iPhone 5)
 * Controls always same size, this spaced evenly
*/

const SongInfoStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${space()};
  position: relative;
  text-align: center;

  .cover {
    border-radius: 50%;
    overflow: hidden;
    padding: ${space()} ${space(.5)};

    img {
      height: 100%;
      border-radius: 50%;
      width: 100%;
    }
  }
`;

export default SongInfoStyled;
