import React, { Component } from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

class VisualHeader extends Component {
  render() {
    return (
      <div className={this.props.passedProps.backdrop}>
        <div className="visual-header">
          <div className="visual-header-content">

            <section id="visual" className="visual-header-section">
              <div className="visual-header-text">
                <h1 className="visual-header-title">{this.props.passedProps.title}</h1>
                <h2 className="visual-header-subtitle">{this.props.passedProps.subtitle}</h2>
                {/*<p className="visual-header-arrow">&darr;</p>*/}
              </div>
            </section>

            <div className="visual-header-group">
              <p className="visual-header-teaser">FOLLOW ME</p>
              <FontAwesomeIcon icon={faArrowDown} className="visual-header-arrow"/>
            </div>

          </div>
          <div className="header-overlay"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    appReducer: state.appReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEventListener: (eventListener) => {
      dispatch({
        type: "SET_EVENT_LISTENER",
        payload: eventListener
      });
    },
    setPreviousOffset: (offsetValue) => {
      dispatch({
        type: "SET_PREVIOUS_OFFSET",
        payload: offsetValue
      });
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(VisualHeader);