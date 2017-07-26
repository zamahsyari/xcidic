/*
 *
 * DetailRecord
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectDetailRecord from './selectors';
import messages from './messages';
import { FormGroup, FormControl, ControlLabel, Button, Alert, Table } from 'react-bootstrap';
import { CheckAlert } from 'components/CheckAlert';
import { Header } from 'components/Header';
import $ from 'jquery';

export class DetailRecord extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state={
      name : '',
      email : '',
      mr_code: '',
      weight : '',
      height : '',
      sistole : '',
      diastole : '',
      blood_type : '',
      blood_pressure : ''
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <CheckAlert isAlert={this.state.isAlert} alertStyle={this.state.alertStyle} alertData={this.state.alertData} />
          <h1>Detail Record</h1>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>MR Code</td>
                <td>{this.state.mr_code}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{this.state.weight}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{this.state.height}</td>
              </tr>
              <tr>
                <td>Sistole</td>
                <td>{this.state.sistole}</td>
              </tr>
              <tr>
                <td>Diastole</td>
                <td>{this.state.diastole}</td>
              </tr>
              <tr>
                <td>Blood type</td>
                <td>{this.state.blood_type}</td>
              </tr>
              <tr>
                <td>Blood Pressure</td>
                <td>{this.state.blood_pressure}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

DetailRecord.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DetailRecord: makeSelectDetailRecord(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailRecord);
