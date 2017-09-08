import React, { Component } from 'react';
import getItems from './../utils/getItems';
import { APIURL } from './../constants';

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: []
    };
  }

  componentWillMount() {
    const assetUrl = `${APIURL}/asset/${this.props.match.params.id}`;
    getItems(assetUrl).then(asset => {
      this.setState({ asset: asset.items });
    });
  }

  showMedia = link => {
    console.log(link);
    if (link) {
      return <img src={link.href} alt="" />;
    }
    return undefined;
  };

  render() {
    console.log(this.state.asset);
    //errorhandling
    //loading state
    //output details
    //handling audio/image
    //back to search button
    return <div>{this.state.asset && this.showMedia(this.state.asset[0])}</div>;
  }
}

export default Asset;
