import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default class PagePlug extends Component {
  render() {
    return (
      <div className="plug-box">
        <div className="plug">
          <p className="plug-heading secondary-color">Ready to discuss your next great project?</p>
          <Link to="/contact" className="plug-button slide-button">
            <p className="slide-button-text">Learn More</p>
            <FontAwesomeIcon icon={faArrowRight} className="slide-button-arrow"/>
          </Link>
        </div>
      </div>
    );
  }
}