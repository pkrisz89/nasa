import React, { Component } from 'react';

class Asset extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hello {this.props.match.params.id}</h1>;
  }
}

export default Asset;
