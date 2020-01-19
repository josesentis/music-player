import styled from 'styled-components';

const inputStyles = `
  background-color: blue;
`;

const RangeStyled = styled.input`
  &::-webkit-slider-runnable-track { ${inputStyles} }
  &::-moz-range-track { ${inputStyles} }
  &::-ms-track { ${inputStyles} }
`;

export default RangeStyled;
