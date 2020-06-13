import React, { Component } from 'react';
import styles from './authentication.module.css';
import AuthService from '../../services/auth.service';

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className={styles.error}>{props.message}</div>;
  }
  return null;
}

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { emailValid, password } = this.state;
    this.setState({
      formValid: emailValid && password.length !== 0
    });
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
    this.setState({ password }, this.validateForm);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    let errorMsg = { ...this.state.errorMsg };
    if (this.state.emailValid) {
      AuthService.login(email, password).then(
        () => {
          this.props.history.push('/profile');
          window.location.reload();
        },
        myErr => {
          const {
            errors: { error }
          } = myErr.response.data;
          errorMsg.authErrs = error;
          this.setState({ errorMsg });
        }
      );
    } else {
      this.setState({
        errorMsg
      });
    }
  };

  render() {
    return (
      <div className={styles.form}>
        <div className="ui three column aligned center aligned grid ">
          <div className="column">
            <h2 className="ui header blue"> Admin Portal </h2>
            <h3 className="ui header"> Sign in with your account </h3>
            <form className="ui large form" onSubmit={this.handleSubmit}>
              <div className="ui stacked segment">
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
                </div>

                <button
                  type="submit"
                  disabled={!this.state.formValid}
                  className="ui fluid large blue submit button"
                >
                  Login
                </button>
                {this.state.errorMsg.authErrs &&
                  this.state.errorMsg.authErrs.map((error, i) => {
                    return error ? (
                      <div className="ui negative message" id="error">
                        <p key={i.id}>{error}</p>
                      </div>
                    ) : null;
                  })}
              </div>

              <div className="ui message">
                Don't have account yet?{' '}
                <a href="/register">Register an Account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
