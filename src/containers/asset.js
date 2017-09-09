import React, { Component } from 'react';
import getItems from './../utils/getItems';
import { APIURL } from './../constants';
import mediaItem from './../components/mediaItem';
import showError from './../components/error';
import Loading from './../components/loading';

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: [],
      metaData: {},
      error: false,
      loading: true
    };
  }

  componentWillMount() {
    const assetUrl = `${APIURL}/asset/${this.props.match.params.id}`;
    getItems(assetUrl)
      .then(asset => {
        this.setState({ asset: asset.collection.items });

        function returnMetaData(item) {
          return item.href.includes('metadata.json', 0);
        }
        const metaData = asset.collection.items.find(returnMetaData);
        return getItems(metaData.href);
      })
      .then(metaData => {
        this.setState({ metaData, error: false, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.loading && <Loading />}
        {this.state.asset &&
          !this.state.loading &&
          mediaItem(
            this.state.asset[0],
            this.state.metaData,
            this.props.match.params.mediaType
          )}
        {showError(this.state.error)}
      </div>
    );
  }
}

export default Asset;
