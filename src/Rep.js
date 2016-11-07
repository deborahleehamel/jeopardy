import React, { Component } from 'react';

export default class Rep extends Component {
  state = {
    show: 'value'
  };

  render() {
    const { show } = this.state;
    switch (show) {
      case 'n':
        return (<div onClick={() => this.setState({ show: 't' })}>${this.props.n}</div>);
      case 't':
        return (<div onClick={() => this.setState({ show: 'smiley' })}>${this.props.t}</div>);
      case 'smiley':
        return (<div>{this.props.smiley}</div>);
      default:
        return (<div onClick={() => this.setState({ show: 'n' })}>${this.props.value}</div>);
    }
  }
};
