import React, { Component } from 'react'
import './list.css'; 

class List extends Component{
	render(){
		return(
			<section>
				<h1>My Grocery List</h1>
				<ul>
					{this.props.todos.todos.map((t, i)=>(
						<li key={i}>{t.text}</li>
					))}
				</ul>
			</section>
		)
	}
}
export default List;