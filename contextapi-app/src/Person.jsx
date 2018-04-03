import React, { Component, Fragment } from 'react';
import Context from './Context';

class Person extends Component {
  render() {
    return (
      <div className="person">
        <Context.Consumer>
          {context => (
            <Fragment>
              <p>Name: {context.state.name}!</p>
              <p>Age: {context.state.age}!</p>
              <p>Title: {context.state.title}!</p>
              <button onClick={context.growAYearOlder} />
            </Fragment>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

export default Person;
