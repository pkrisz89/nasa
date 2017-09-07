import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import getItems from './utils/getItems';
import mapItems from './utils/mapItems';
import SearchForm from './components/searchForm';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Pagination = styled.button`
  display: ${props => props.hidden ? 'none' : 'inline-block'};
`

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: 'moon',
      mediatype: 'image', //image or audio
      collection: {},
      images: []
    };
  };
  
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };



  ///REFACTOR THIS INTO ONE
  addToCollection = (event) => {
    const APIURL = 'https://images-api.nasa.gov/';
    const url = `${APIURL}search?q=${this.state.keyword}&media_type=${this.state.mediatype}`
    getItems(event, url)
      .then(collection => {this.setState({collection})})
  };

  findPaginationUrl = (urls, direction) => {
    if (urls) {
      return urls.find(url => url.rel === direction)
    }
  }

  pagination = (direction) => {
    return getItems(window.event, this.findPaginationUrl(this.state.collection.links, direction).href)
    .then( collection => {this.setState({collection})})
  }
  
  render() {
    let nextLink = this.findPaginationUrl(this.state.collection.links, 'next')
    let prevLink = this.findPaginationUrl(this.state.collection.links, 'prev')
    return (
      <div>
        <SearchForm keyword={this.state.keyword} 
                    mediatype={this.state.mediatype} 
                    handleChange={this.handleChange} 
                    getItems={this.addToCollection}/>
        <GridContainer>
          {mapItems(this.state.collection.items)}
        </GridContainer>
        <div>
          <Pagination hidden={!prevLink} onClick={()=>{this.pagination('prev')}}>PREVIOUS</Pagination>
          <Pagination hidden={!nextLink} onClick={()=>{this.pagination('next')}}>NEXT</Pagination>
        </div>
      </div>
    );
  }
}

export default App;