import React from 'react';

import RangeStyled from './styles';

class Range extends React.Component {
  render () {
    const { onChange, value, name } = this.props;

    return(
      <RangeStyled elapsed={value}>
        <input
          type="range"
          name={name}
          step="1"
          onChange={onChange}
          value={value}
          ref={el => {
            this._range = el;
          }}
        />
      </RangeStyled>
    )
  }
}

export default Range;
