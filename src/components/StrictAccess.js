import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class StrictAccess extends Component {
  render() {
    const { users: { username, password } } = this.props;
    if (!(username === 'joao' && password === "1234")) {
      alert("Access denied")
      return <Redirect to="/" />
    }

    return (<p>Welcome joao!</p>);
  }
}
