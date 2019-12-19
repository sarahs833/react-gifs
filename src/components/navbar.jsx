import React, { Component } from "react";

class Navbar extends Component {

search = (e) => {
  this.props.searchWord(e.target.value);
}
  render() {
    return (
      <div>
        <p>Hello</p>
        <input
          className="form-control form-search"
          type="text"
          onChange={this.search}
        />
      </div>
    );
  }
}

export default Navbar;
