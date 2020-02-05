import styled from 'styled-components';

const MAX_HEIGHT = '667';
const MAX_WIDTH = '375';

const AppWrapper = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  max-height: ${MAX_HEIGHT}px;
  max-width: ${MAX_WIDTH}px;
  overflow: hidden;
  position: relative;

  > * {
    max-height: inherit;
    max-width: inherit;
  }
`;

export { AppWrapper };
