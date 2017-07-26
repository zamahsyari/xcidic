/*
 *
 * EditRecord
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectEditRecord from './selectors';
import messages from './messages';
import { FormGroup, FormControl, ControlLabel, Button, Alert, Table } from 'react-bootstrap';
import { CheckAlert } from 'components/CheckAlert';
import { Header } from 'components/Header';
import $ from 'jquery';

export class EditRecord extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
      super(props);
      this.state={
          isAlert:false,
          alertData:"",
          alertStyle:"warning"
      },
      this.addData=this.addData.bind(this)
    }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
            <CheckAlert isAlert={this.state.isAlert} alertStyle={this.state.alertStyle} alertData={this.state.alertData} />
            <h1>Edit Record</h1>
            <form>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl type="text" placeholder="Your email" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" placeholder="Your password" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Role</ControlLabel>
                <FormControl componentClass="select" placeholder="Select Role">
                  <option value="doctor">Doctor</option>
                  <option value="user">User</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>MR Code</ControlLabel>
                <FormControl type="text" placeholder="MR Code" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Weight</ControlLabel>
                <FormControl type="text" placeholder="Weight" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Height</ControlLabel>
                <FormControl type="text" placeholder="Height" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Sistole</ControlLabel>
                <FormControl type="text" placeholder="Sistole" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Diastole</ControlLabel>
                <FormControl type="text" placeholder="Diastole" />
              </FormGroup>
              <ControlLabel>Blood Type</ControlLabel>
              <FormControl componentClass="select" placeholder="Select Blood Type">
                  <option value="a">A</option>
                  <option value="b">B</option>
                  <option value="ab">AB</option>
                  <option value="o">O</option>
                </FormControl>
                <FormGroup>
                <ControlLabel>Blood Pressure</ControlLabel>
                <FormControl type="text" placeholder="Blood Pressure" />
              </FormGroup>
              <Button bsStyle="primary" type="submit" onClick={this.addData}>Save</Button>
            </form>
          </div>
      </div>
    );
  }
}

EditRecord.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EditRecord: makeSelectEditRecord(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecord);
