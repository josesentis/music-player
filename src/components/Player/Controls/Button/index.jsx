import React from 'react';

class Button extends React.PureComponent {
  render () {
    const { onClick, icon } = this.props;

    return <button onClick={onClick}>{ icon }</button>
  }
}

export default Button;
