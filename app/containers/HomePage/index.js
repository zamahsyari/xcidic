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

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
	    super(props);
	    this.state={
	        isAlert:false,
	        alertData:"",
	        alertStyle:"warning",
          data:[],
	    }
	  }
    componentDidMount(){
      var init=this;
      $.ajax({
        url:'http://127.0.0.1:8080/all',
        success:function(data){
          console.log(data);
          // init.setState({data:data});
        },error:function(error){
          console.log(e);
        }
      });
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((record,i)=><TableRow key={i} data={record} />)}
              </tbody>
            </Table>
            <a href="/addrecord"><Button bsStyle="primary">Add data</Button></a>
      	</div>
      </div>
    );
  }
}

export class TableRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.email}</td>
        <td>{this.props.data.weight}</td>
        <td>{this.props.data.height}</td>
        <td>
          <a href="/editrecord"><Button bsStyle="warning">Edit Record</Button></a>
          <a href="/deleterecord"><Button bsStyle="danger">Delete Record</Button></a>
        </td>
      </tr>
    );
  }
}
