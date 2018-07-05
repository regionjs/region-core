import React, { PureComponent } from 'react';

class DisplayComponent extends PureComponent {
  render() {
    const { user, follower } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{user}</h1>
        </header>
        <p className="App-intro">
          {follower}
        </p>
      </div>
    );
  }
}

export default DisplayComponent;
