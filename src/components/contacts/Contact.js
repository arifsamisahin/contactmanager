import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortDown,
  faSortUp,
  faTrash,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

class Contact extends PureComponent {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, phone, email } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-2">
              <h4
                style={{ cursor: 'pointer', userSelect: 'none' }}
                onClick={this.onShowClick}
              >
                {name}
                <FontAwesomeIcon
                  style={{ float: 'right' }}
                  icon={showContactInfo ? faSortUp : faSortDown}
                  size="lg"
                />
              </h4>

              {showContactInfo ? (
                <div>
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                  </ul>
                  <div className="text-right mt-1">
                    <Link to={`contact/edit/${id}`}>
                      <button className="btn btn-sm btn-primary">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-sm btn-danger ml-1"
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
