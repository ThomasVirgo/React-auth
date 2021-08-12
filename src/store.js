import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import generalReducer from './reducers/general'
  
// Its API is { subscribe, dispatch, getState }.
let store = createStore(generalReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;