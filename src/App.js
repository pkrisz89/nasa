import React, { Component } from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const APIUrl = 'https://images-api.nasa.gov/';

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 20%;
  height: 0;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  background: teal;
`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: 'moon',
      mediatype: 'image', //images or audio
      collection: [],
      images: []
    };
  };

  getItems = (event) => {
    event.preventDefault();
    const mediatype = this.state.mediatype;
    const keyword = this.state.keyword
    axios.get(`${APIUrl}/search?q=${keyword}&media_type=${mediatype}`).then((res)=>{
      this.setState({collection: res.data.collection.items})
    }).catch(error=>{console.log(error)});
  }

  mapItems = (items) => {
    if (items) {
      return items.map(item => {
        return (<ImageWrapper key={item.data[0].nasa_id}><LazyLoad><Image src={item.links[0].href} alt=""/></LazyLoad></ImageWrapper>)
      })
    }
  };
  

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    return (
      <div className="">
        Make this more semantic!
        <form>
          <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange}/>
          <button onClick={this.getItems}>Search</button>
          <div>
            <input type="radio" name="mediatype" value="image" checked={this.state.mediatype === 'image'} onChange={this.handleChange}/> Images
            <input type="radio" name="mediatype" value="audio" checked={this.state.mediatype === 'audio'} onChange={this.handleChange}/> Audio
          </div>
        </form>
        {this.mapItems(this.state.collection)}
      </div>
    );
  }
}

export default App;
