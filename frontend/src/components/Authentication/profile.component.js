import React, { Component } from 'react';
import AuthService from '../../services/auth.service';
import styles from './authentication.module.css';
import { Redirect } from 'react-router-dom';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
      navigate: false
    };
  }
  logout = () => {
    localStorage.removeItem('token');
    this.setState({ navigate: true });
  };
  render() {
    const { currentUser, navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return (
      <div className="pusher">
        <div
          className="ui inverted vertical center aligned segment"
          id={styles.masterhead}
        >
          <div className="ui text container" id={styles.header}>
            <h1 className="ui inverted header">
              Hello, {currentUser.username.toUpperCase()}( {currentUser.email}{' '}
              )!
            </h1>
            <h2>Something great is coming your way.Stay tuned!</h2>
            <h3>Remember, with great power comes great responsibility! </h3>
            <div className="ui huge primary button" onClick={this.logout}>
              {' '}
              Log Out <i className="right arrow icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
