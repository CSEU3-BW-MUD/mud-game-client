import { combineReducers, createStore } from 'redux';

import * as reducers from './reducers';

const store = createStore(
  combineReducers({
    count: reducers.countReducer,
    auth: reducers.authReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;