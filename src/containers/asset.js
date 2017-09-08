import React, { Component } from 'react';
import getItems from './../utils/getItems';
import { APIURL } from './../constants';

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: [],
      metaData: {}
    };
  }

  componentWillMount() {
    const assetUrl = `${APIURL}/asset/${this.props.match.params.id}`;
    getItems(assetUrl)
      .then(asset => {
        this.setState({ asset: asset.collection.items });
        return getItems(asset.collection.items[3].href);
      })
      .then(metaData => {
        this.setState({ metaData });
      });
  }

  showMedia = (link, metaData) => {
    if (link) {
      return (
        <div>
          <h1>{metaData['XMP:Title']}</h1>
          <img src={link.href} alt="" />
          <p>Created at: {metaData['XMP:DateCreated']}</p>
          <p>Credit: {metaData['XMP:Credit']}</p>
          <p>Description: {metaData['XMP:Description']}</p>
        </div>
      );
    }
    return undefined;
  };

  render() {
    //errorhandling
    //loading state
    //output details
    //handling audio/image
    //back to search button
    console.log(this.state.metaData);
    return (
      <div>
        {this.state.asset &&
          this.showMedia(this.state.asset[0], this.state.metaData)}
      </div>
    );
  }
}

export default Asset;
