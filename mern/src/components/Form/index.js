import React, { Component } from 'react'
import './form.css';


class Form extends Component{
	constructor(props) {
    super(props)
   	this.inputValue = ""
  }
	
	addItem(e){
		console.log("I am here!------------>")
		e.preventDefault()
		
		this.props.addItems(this.inputValue.value)
	}
	render(){
		return(
			<section className="card">
				<form action="">
					<h4>Add New Item</h4>
					<label className="text-left">Item Name</label>
	        <input type="text" ref={(input) => {this.inputValue = input}}placeholder="grocery Item"/>
	        <button type="button" className="button expanded" id="custom-btn" onClick={(e) => this.addItem(e)}>Add</button>
				</form>
			</section>
		)
	}
}
export default Form