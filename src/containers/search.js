import React, { Component } from 'react';
import styled from 'styled-components';

import getItems from './../utils/getItems';
import mapItems from './../utils/mapItems';
import { defaultUrl } from './../constants';
import SearchForm from './../components/searchForm';
import showError from './../components/error';
import Pagination from './../components/pagination.js';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px auto;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: 'Moon',
      mediatype: 'image', //image or audio
      searchedBefore: false,
      collection: {},
      images: [],
      apiError: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addToCollection = url => {
    getItems(url)
      .then(items => {
        this.setState({
          collection: items.collection,
          searchedBefore: true,
          apiError: false
        });
      })
      .catch(() => {
        this.setState({ apiError: true });
      });
  };

  render() {
    return (
      <div>
        <SearchContainer>
          <SearchForm
            keyword={this.state.keyword}
            mediatype={this.state.mediatype}
            handleChange={this.handleChange}
            getItems={e => {
              e.preventDefault();
              this.addToCollection(
                defaultUrl(this.state.keyword, this.state.mediatype)
              );
            }}
          />
        </SearchContainer>

        {showError(this.state.apiError)}

        <GridContainer>
          {this.state.collection.items &&
            mapItems(
              this.state.collection.items,
              this.state.mediatype,
              this.state.searchedBefore
            )}
        </GridContainer>
        <Pagination
          links={this.state.collection.links}
          addToCollection={this.addToCollection}
        />
      </div>
    );
  }
}

export default Search;
