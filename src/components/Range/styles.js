import styled from 'styled-components';

import { colors, gradient } from '../../styles';

const modifiers = `
  .small & {
    height: 2px;
  }
`;

const thumbStyles = `
  background: transparent;
  border: none;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  height: 5px;
  margin-top: 0px;
  -webkit-appearance: none;
  width: 5px;

  ${modifiers}
`;

const trackStyles = `
  background: ${colors.neutro[900]};
  border-radius: 0;
  border: none;
  box-shadow: none;
  cursor: pointer;
  height: 5px;
  width: 100%;

  ${modifiers}
`;

const RangeStyled = styled.div`
  ${modifiers}

  input[type=range] {
    border-radius: 4px;
    position: relative;
    margin: 5px 0 0;
    width: 100%;
    -webkit-appearance: none;

    &::after {
      background-image: ${gradient};
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: ${props => props.elapsed}%;
    }

    .small & {
      margin: 0;
      position: static;
    }
  }

  input[type=range]:focus { outline: none; }

  input[type=range]::-webkit-slider-thumb { ${thumbStyles} }
  input[type=range]::-moz-range-thumb { ${thumbStyles} }
  input[type=range]::-ms-thumb { ${thumbStyles} }

  input[type=range]::-moz-range-track { ${trackStyles} }
  input[type=range]::-ms-track { ${trackStyles} }
  input[type=range]::-webkit-slider-runnable-track { ${trackStyles} }

  input[type=range]::-ms-fill-lower {
    background: transparent;
    border: none;
    border-radius: 0px;
    box-shadow: none;
  }

  input[type=range]::-ms-fill-upper {
    background: transparent;
    border: none;
    border-radius: 0px;
    box-shadow: none;
  }

  input[type=range]:focus::-webkit-slider-runnable-track { ${trackStyles} }
  input[type=range]:focus::-ms-fill-lower { transparent; }
  input[type=range]:focus::-ms-fill-upper { transparent; }
`;

export default RangeStyled;
