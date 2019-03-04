import React, { Component } from 'react';
import { connect } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faPhone } from '@fortawesome/free-solid-svg-icons';
// import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
        </header>
        <p>{this.props.appReducer.fullName}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appReducer: state.appReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => {
      dispatch({
        type: 'SET_DATA',
        payload: data
      });
    },
    setUser: (user) => {
      dispatch({
        type: 'SET_USER',
        payload: user
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
