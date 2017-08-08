import React, { Component } from 'react'

class Item extends Component {
	render(){
		if(this.props.todos.isEditing){
			return(
				<div>
					{this.props.todos.todos.map((t, i)=> (
						<li key={i}>
							{t.name} 
							<button className="button li-btn" onClick={ () => this.props.editingItem(i,true)}>Save</button>
							<button className="button li-btn" onClick={ () => this.props.deleteItems(i)}>Delete</button>
						</li>
					))}
				</div>
			)
		}return(
			<div>
			{this.props.todos.todos.map((t, i)=> (
				<li key={i}>
					{t.name} 
					<button className="button li-btn" onClick={ () => this.props.editingItem(i,true)}>Edit</button>
					<button className="button li-btn" onClick={ () => this.props.deleteItems(i)}>Delete</button>
				</li>
			))}
			</div>
		)
	}
}
export default Item