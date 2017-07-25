/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { FormGroup, FormControl, ControlLabel, Button, Alert, Table } from 'react-bootstrap';
import { CheckAlert } from 'components/CheckAlert';
import { Header } from 'components/Header';
import $ from 'jquery';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
	    super(props);
	    this.state={
	        isAlert:false,
	        alertData:"",
	        alertStyle:"warning"
	    },
      this.addData=this.addData.bind(this);
	  }
  addData(){
    $.ajax({
      url:'http://127.0.0.1:8080/add',
      method:'post',
      // data:JSON.stringify({"name":"budi","email":"budi@gmail.com"}),
      data:"pass",
      success:function(response){
        console.log(response);
      },error:function(error){
        console.log(error)
      }
    });
    // $.ajax({
    //   url:'http://127.0.0.1:8080/add',
    //   method:'post',
    //   data:{'name':'budi','email':'budi@gmail.com'},
    //   success:function(response){
    //     console.log(response);
    //   },error:function(error){
    //     console.log(error)
    //   }
    // });
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
      	<Header/>
      	<div className="container">
      		<CheckAlert isAlert={this.state.isAlert} alertStyle={this.state.alertStyle} alertData={this.state.alertData} />
            <h1>Medical Records</h1>
            <Table striped condensed hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Weight</th>
                  <th>Height</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </Table>
            <Button onClick={this.addData} bsStyle="primary">Add data</Button>
      	</div>
      </div>
    );
  }
}
