/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

var header={
	backgroundColor:'#49007A',
	color:'#fff',
	padding:'10px'
}

var logo={
	fontSize:'16px',
	fontWeight:'500',
	textDecoration:'none',
	color:'#fff'
}

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
	render() {
	    return (
	      <div style={header}>
	      	<div className="container">
	        	<a href="/" style={logo}>Simple Medical Record</a>
	        </div>
	      </div>
	    );
	}
}

Header.propTypes = {

};

export default Header;
