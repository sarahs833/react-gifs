import React, { Component } from 'react';
import Git from './git.jsx';

class GifList extends Component {
  render() {
    return this.props.gifs.map(gif =>{
        return <Git id={gif.id} key={gif.if} />
      });
  }
}
 export default GifList;
