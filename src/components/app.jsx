import React, { Component } from 'react';
// import giphy from 'giphy-api';
import Git from './git';
import Navbar from './navbar';
import GifList from './gif_list'
const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs:[
      { id:"a93jwI0wkWTQs" },
      { id:"Rl0DcglqSWMTiqUblU"},
      ],
      id :"a93jwI0wkWTQs"
    };
  }

  searchWord = (query) => {
   giphy({ apiKey: GIPHY_API_KEY, https: true })
    search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Navbar searchWord={this.searchWord} />
          <div className="selected-git">
          <Git id={this.state.id} />
          </div>
        </div>

        <div className="right-scene">
         <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
