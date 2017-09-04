import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword: 'moon',
      mediatype: 'image' //images or audio
    };
    this.getMedia = this.getMedia.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

 getMedia (event) {
   event.preventDefault();
   const mediatype = this.state.mediatype;
   const keyword = this.state.keyword
  const APIUrl = 'https://images-api.nasa.gov/';
  axios.get(`${APIUrl}/search?q=${keyword}&media_type=${mediatype}`).then((res)=>{console.log(res.data)});
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    console.log(this.state)
    return (
      <div className="">
        Make this more semantic!
        <form>
        <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange}/>
        <button onClick={this.getMedia}>Search</button>
        <div>
          <input type="radio" name="mediatype" value="image" checked={this.state.mediatype === 'image'} onChange={this.handleChange}/> Images
          <input type="radio" name="mediatype" value="audio" checked={this.state.mediatype === 'audio'} onChange={this.handleChange}/> Audio
        </div>
        </form>
      </div>
    );
  }
}

export default App;
