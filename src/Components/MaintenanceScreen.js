import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default class MaintenanceScreen extends Component {
  render() {
    return (
      <div className={this.props.hiddenView ? "maintenance-box " + this.props.hiddenView : "maintenance-box"}>
        <div className="maintenance-title">SINNOTT <span className="maintenance-span">DESIGN</span></div>
        <div className="maintenance-subtitle">Full Experience Coming Soon</div>
        <FontAwesomeIcon icon={faThumbsUp} className="maintenance-icon"/>
        {this.props.includeButton ? <Link to="/" className="maintenance-button slide-button">
          <p className="slide-button-text">Return Home</p>
          <FontAwesomeIcon icon={faArrowRight} className="slide-button-arrow"/>
        </Link> : null}
      </div>
    )
  }
}