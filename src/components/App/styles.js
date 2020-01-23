import styled from 'styled-components';

const MAX_HEIGHT = '675';
const MAX_WIDTH = '335';

const AppWrapper = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  max-height: ${MAX_HEIGHT}px;
  max-width: ${MAX_WIDTH}px;
  /* position: relative; */
`;

export { AppWrapper };
