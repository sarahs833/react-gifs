import React, { Component } from 'react';


class Git extends Component {

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.webp?cid=790b7611b37f387cbd403f4b9d6c81f4e05555c9dedc5743&rid=200.webp`;
    return (
      <img src={src} className="gif" />
    );
  }
}
export default Git;
