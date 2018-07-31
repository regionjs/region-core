import React, { PureComponent } from 'react';

class Display extends PureComponent {
  render() {
    const { user, follower } = this.props;
    return (
      <div style={{ flex: 1, width: '100%', height: '100%', padding: 10 }}>
        <h1>{user}</h1>
        <p>{follower}</p>
      </div>
    );
  }
}

export default Display;
