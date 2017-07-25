/*
 *
 * Register
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectRegister from './selectors';
import messages from './messages';
import { FormGroup, FormControl, ControlLabel, Button, Alert } from 'react-bootstrap';
import { CheckAlert } from 'components/CheckAlert';
import {Header} from 'components/Header';

export class Register extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={
        isAlert:false,
        alertData:"",
        alertStyle:"warning",
        formEmail:"",
        formPassword:""
    };
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateRePassword = this.updateRePassword.bind(this);
  }
  updateEmail(e){
    this.setState({formEmail:e.target.value});
  }
  updatePassword(e){
    this.setState({formPassword:e.target.value});
  }
  updateRePassword(e){
    if(e.target.value != this.state.formPassword){
      this.setState({
        isAlert:true,
        alertData:"Password and re-type password must be the same"
      });
    }else{
      this.setState({
        isAlert:false
      })
    }
  }
  submitData(){
    console.log("oke");
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <CheckAlert isAlert={this.state.isAlert} alertStyle={this.state.alertStyle} alertData={this.state.alertData} />
          <h1>Sign Up</h1>
          <form onSubmit={this.submitData}>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl type="text" placeholder="Your email" value={this.state.email} onChange={this.updateEmail} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="Your password" value={this.state.password} onChange={this.updatePassword} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Re-type Password</ControlLabel>
              <FormControl type="password" placeholder="Your password" onChange={this.updateRePassword} />
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Role</ControlLabel>
              <FormControl componentClass="select" placeholder="select role">
                <option value="user">User</option>
                <option value="doctor">Doctor</option>
              </FormControl>
            </FormGroup>
            <Button bsStyle="primary" type="submit">Register</Button>
            <br/><br/>
            Feeling registered ? <a href="/login">Log in instead</a>
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Register: makeSelectRegister(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
