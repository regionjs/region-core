import React, { PureComponent } from 'react';
import './loading.css';

class Loading extends PureComponent {
  render() {
    const { loading } = this.props;
    if (loading === false) {
      return null;
    }
    return (
      <div className="container">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Loading;
