import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const { title } = props;
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
      <a href="/" className="navbar-brand">
        {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/contact/add" className="nav-item nav-link">
            <FontAwesomeIcon icon={faPlus} /> Add
          </Link>
          <Link to="/about" className="nav-item nav-link">
            <FontAwesomeIcon icon={faQuestion} /> About
          </Link>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: 'Header Title'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
