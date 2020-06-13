import React, { Component } from 'react';
import styles from './authentication.module.css';
import AuthService from '../../services/auth.service';

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className={styles.error}>{props.message}</div>;
  }
  return null;
}

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameValid: false,
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      authErrs: [],
      formValid: false,
      errorMsg: {}
    };
  }

  validateForm = () => {
    const {
      usernameValid,
      emailValid,
      passwordValid,
      passwordConfirmValid
    } = this.state;
    this.setState({
      formValid:
        usernameValid && emailValid && passwordValid && passwordConfirmValid
    });
  };

  updateUsername = username => {
    this.setState({ username }, this.validateUsername);
  };

  validateUsername = () => {
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = 'Must be at least 3 characters long';
    }
    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  updateEmail = email => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = 'Invalid email format';
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  updatePassword = password => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = 'Password must be at least 6 characters long';
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMsg.password = 'Password must contain a digit';
    } else if (!/[!@#$%^&*]/.test(password)) {
      passwordValid = false;
      errorMsg.password = 'Password must contain special character: !@#$%^&*';
    }

    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  updatePasswordConfirm = passwordConfirm => {
    this.setState({ passwordConfirm }, this.validatePasswordConfirm);
  };

  validatePasswordConfirm = () => {
    const { passwordConfirm, password } = this.state;
    let passwordConfirmValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = 'Passwords do not match';
    }

    this.setState({ passwordConfirmValid, errorMsg }, this.validateForm);
  };

  handleSubmit = event => {
    event.preventDefault();
    let errorMsg = { ...this.state.errorMsg };
    let isAuthenticated = true;
    if (this.state.formValid) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        () => {
          this.props.history.push('/profile');
          window.location.reload();
        },
        error => {
          const {
            errors: { username, email }
          } = error.response.data;
          errorMsg.authErrs = [username, email];
          this.setState({ isAuthenticated, errorMsg });
        }
      );
    } else {
      this.setState({
        formValid: false
      });
    }
  };

  render() {
    return (
      <div className={styles.form}>
        <div className="ui three column aligned center aligned grid ">
          <div className="column">
            <h2 className="ui header blue"> Admin Portal </h2>
            <h3 className="ui header"> Please sign up with info below </h3>
            <form className="ui large form" onSubmit={this.handleSubmit}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      placeholder="Username"
                      name="username"
                      type="text"
                      value={this.state.username}
                      onChange={e => this.updateUsername(e.target.value)}
                    />
                  </div>
                  <ValidationMessage
                    valid={this.state.usernameValid}
                    message={this.state.errorMsg.username}
                  />
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="envelope icon"></i>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.updateEmail(e.target.value)}
                    />
                  </div>
                  <ValidationMessage
                    valid={this.state.emailValid}
                    message={this.state.errorMsg.email}
                  />
                </div>

                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      placeholder="Your Password"
                      name="password"
                      value={this.state.password}
                      onChange={e => this.updatePassword(e.target.value)}
                    />
                  </div>
                  <ValidationMessage
                    valid={this.state.passwordValid}
                    message={this.state.errorMsg.password}
                  />
                </div>

                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      placeholder="Retype your password"
                      name="password-confirm"
                      value={this.state.passwordConfirm}
                      onChange={e => this.updatePasswordConfirm(e.target.value)}
                    />
                  </div>
                  <ValidationMessage
                    valid={this.state.passwordConfirmValid}
                    message={this.state.errorMsg.passwordConfirm}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!this.state.formValid}
                  className="ui fluid large blue submit button"
                >
                  Create Account
                </button>
                {this.state.errorMsg.authErrs &&
                  this.state.errorMsg.authErrs.map((error, i) => {
                    return error ? (
                      <div className="ui negative message" id="error">
                        <p>
                          {error[0].charAt(0).toUpperCase() + error[0].slice(1)}
                        </p>
                      </div>
                    ) : null;
                  })}
              </div>

              <div className="ui message">
                Already have an account? <a href="/login">Log In</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
