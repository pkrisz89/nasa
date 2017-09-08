import React, { Component } from 'react';
import getItems from './../utils/getItems';
import { APIURL } from './../constants';
import mediaItem from './../components/mediaItem';

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
        const metaData = asset.collection.items.find(item =>
          item.href.includes('metadata.json', 0)
        );
        return getItems(metaData.href);
      })
      .then(metaData => {
        this.setState({ metaData });
      });
  }

  render() {
    return (
      <div>
        {this.state.asset &&
          mediaItem(
            this.state.asset[0],
            this.state.metaData,
            this.props.match.params.mediaType
          )}
      </div>
    );
  }
}

export default Asset;
