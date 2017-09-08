import React, { Component } from 'react';
import getItems from './../utils/getItems';
import { APIURL } from './../constants';

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: {}
    };
  }

  componentWillMount() {
    const assetUrl = `${APIURL}/asset/${this.props.match.params.id}`;
    getItems(assetUrl).then(asset => {
      this.setState({ asset });
    });
  }

  render() {
    //errorhandling
    //output details
    //handling audio/image
    //back to search button
    return <h1>Hello {this.props.match.params.id}</h1>;
  }
}

export default Asset;
