import React, { Component } from 'react'

class List extends Component{
	render(){
		console.log('List Component------><---', this.props)
		return(
			<section>
				<h1>My Grocery List</h1>
				<ul>
					<li>{this.props.items}</li>
				</ul>
			</section>
		)
	}
}
export default List;