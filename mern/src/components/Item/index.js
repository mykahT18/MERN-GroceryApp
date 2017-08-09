import React, { Component } from 'react'

class Item extends Component {
	constructor(props){
		super(props)
		this.index;
	}
	render(){
		let items = this.props.todos.todos
		if(this.props.todos.isEditing){
		return(
				<div>
					<li>
						<input type="text" placeholder={this.index}/>
						<button className="button li-btn" onClick={ () => this.props.editingItem(false)}>Save</button>
						<button className="button li-btn" onClick={ () => this.props.deleteItems()}>Delete</button>
					</li>
				</div>
			)
		}
		return(
			<div>
			{items.map((t, i)=> {
				let boundItemClick = this.onItemClick.bind(this, t, i);
				return(
					<li key={i}>
						{t.name} 
						<button className="button li-btn" onClick={boundItemClick}>Edit</button>
						<button className="button li-btn" onClick={ () => this.props.deleteItems(i)}>Delete</button>
					</li>
				)
			})}
			</div>
		)
	}
	onItemClick(item, i){
		console.log(item, i)
		this.index = item.name;
		this.props.editingItem(true)
	}

}
export default Item