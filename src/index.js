import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

import * as serviceWorker from './serviceWorker';


const initialState = {
  id: null,
  fullName: 'Adrian Sinnott',
  email: null,
  message: null,
  schedule: true
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_DATA":
      console.log('SET DATA block.');
      break;
    case "SET_USER":
      console.log('SET USER block.');
      break;
    default:
      console.log('Default block');
      return state;
  }
  return state;
};

const store = createStore(combineReducers({appReducer}), applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
