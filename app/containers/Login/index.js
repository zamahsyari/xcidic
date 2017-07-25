/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectLogin from './selectors';
import messages from './messages';
import { FormGroup, FormControl, ControlLabel, Button, Alert } from 'react-bootstrap';
import { CheckAlert } from 'components/CheckAlert';
import { Header } from 'components/Header';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={
        isAlert:false,
        alertData:"",
        alertStyle:"warning"
    }
  }

  render() {
    return (
      <div>
          <Header />
          <div className="container">
            <CheckAlert isAlert={this.state.isAlert} alertStyle={this.state.alertStyle} alertData={this.state.alertData} />
            <h1>Login</h1>
            <form>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl type="text" placeholder="Your email" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" placeholder="Your password" />
              </FormGroup>
              <Button bsStyle="primary" type="submit">Login</Button>
              <br/><br/>
              Not yet registered ? <a href="/signup">Sign up here</a>
            </form>
          </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
