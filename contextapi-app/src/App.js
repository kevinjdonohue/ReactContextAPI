import React, { Component } from 'react';
import Provider from './Provider';
import Family from './Family';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <p>I'm the app</p>
          <Family />
        </div>
      </Provider>
    );
  }
}

export default App;
