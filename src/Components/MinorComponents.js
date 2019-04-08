import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faArrowRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export class MaintenanceScreen extends Component {
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

export class ConstructionBanner extends Component {
  render() {
    return (
      <div className="construction-banner">
        <FontAwesomeIcon icon={faExclamationTriangle} className="construction-icon"/>
        <p className="construction-message">PAGE UNDER CONSTRUCTION: CURRENTLY DISPLAYING PLACEHOLDER CONTENT</p>
        <FontAwesomeIcon icon={faExclamationTriangle} className="construction-icon"/>
      </div>
    );
  }
}

export class PagePlug extends Component {
  render() {
    return (
      <div className="plug-box">
        <div className="plug">
          <p className="plug-heading secondary-color">{this.props.pageInfo.title}</p>
          <Link to={this.props.pageInfo.pagePath} className="plug-button slide-button">
            <p className="slide-button-text">{this.props.pageInfo.buttonText}</p>
            <FontAwesomeIcon icon={faArrowRight} className="slide-button-arrow"/>
          </Link>
        </div>
      </div>
    );
  }
}