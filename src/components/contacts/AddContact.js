import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    errors: {}
  };

  onInputChanged = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );

    dispatch({ type: 'ADD_CONTACT', payload: res.data });
    this.setState({ name: '', email: '', phone: '', errors: {} });
    this.props.history.push('/');
  };
  render() {
    const { name, phone, email, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    label="Name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onInputChanged}
                    error={errors.name}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Phone Number"
                    placeholder="Enter phone..."
                    value={phone}
                    onChange={this.onInputChanged}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={this.onInputChanged}
                    error={errors.email}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-success"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
