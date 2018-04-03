import React, { Component } from 'react';
import Context from './Context';

class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 30,
    title: 'Software Developer'
  };

  incrementAge = () => {
    this.setState({
      age: (this.state.age += 1)
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          growAYearOlder: this.incrementAge
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default MyProvider;
