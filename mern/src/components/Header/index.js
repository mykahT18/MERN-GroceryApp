import React, { Component } from 'react';

class Header extends Component{
	render(){
		return(
			<div className="top-bar" id="example-menu">
	  		<div className="top-bar-left">
		    	<ul className="dropdown menu" data-dropdown-menu>
		      	<li className="menu-text">Shopping</li>
		    	</ul>
  			</div>
			</div>
		)
	}
}
export default Header;
