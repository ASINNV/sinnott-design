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
  schedule: true,
  previousOffset: 0
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PREVIOUS_OFFSET":
      state = {
        ...state,
        previousOffset: action.payload
      };
      break;
    case "SET_DATA":
      break;
    case "SET_USER":
      break;
    default:
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
