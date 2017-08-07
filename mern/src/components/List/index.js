import React, { Component } from 'react'
import './list.css'; 

class List extends Component{
	render(){
		return(
			<section>
				<h1>My Shopping List</h1>
				<ul>
					{this.props.todos.todos.map((t, i)=>(
						<li key={i}>
							{t.name} 
						<button className="button li-btn">Edit</button>
						<button className="button li-btn" onClick={ () => this.props.deleteItems(i)}>Delete</button>
						</li>
					))}
				</ul>
			</section>
		)
	}
}
export default List;