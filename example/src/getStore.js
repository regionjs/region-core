import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';
import { reducer as loadingReducer } from 'redux-loadings';

const middleware = applyMiddleware(reduxThunk);
const store = compose(middleware)(createStore)(loadingReducer);

export { store };
