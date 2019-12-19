import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <p>Hello</p>
        <input
          className="form-control form-search"
          type="text"
        />
      </div>
    );
  }
}

export default Navbar;
