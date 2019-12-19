import React, { Component } from 'react';
// import giphy from 'giphy-api';

import Navbar from './navbar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Navbar />
          <div className="selected-git">
          </div>
        </div>

        <div className="right-scene">
        </div>
      </div>
    );
  }
}

export default App;
