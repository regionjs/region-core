import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ControlComponent from './ControlComponent';
import { store } from './redux-loadings/getReduxStore'; // TODO extract

ReactDOM.render((
  <Provider store={store} >
    <ControlComponent />
  </Provider>
), document.getElementById('root'));

