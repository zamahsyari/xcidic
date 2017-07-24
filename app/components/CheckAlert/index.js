/**
*
* CheckAlert
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Alert } from 'react-bootstrap';

export class CheckAlert extends React.Component {
	render(){
		{{console.log(this.props)}}
		if(this.props.isAlert==true){
			return(
				<Alert bsStyle={this.props.alertStyle}>{this.props.alertData}</Alert>
			);
		}else{
			return(
				<div>
				</div>
			);
		}
	}
}

CheckAlert.propTypes = {

};

export default CheckAlert;
