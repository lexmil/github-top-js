import { createStore, applyMiddleware } from 'redux';
import reposReducer from '../redux/repos';
import thunk from 'redux-thunk';

export default () => createStore(
  reposReducer,
  applyMiddleware(thunk)
);
