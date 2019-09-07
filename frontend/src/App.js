import React, { Component } from 'react';
import Main from './components/Main.js';
import Header from './components/Header';

class App extends Component {
    constructor(props) {
        super(props);
    }
  
  render() {
      return(
          <div className="bg-light">
                <Header/>
                <div class="container"><Main/></div>
          </div>
      );
  }
}

export default App;