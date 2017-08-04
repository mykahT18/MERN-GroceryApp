import React, { Component } from 'react';
import './App.css';
import '../foundation-6.4.1-complete/css/foundation.min.css'

// Components
import Header from '../components/Header'
import Form from '../components/Form'
import List from '../components/List'

class App extends Component {
   constructor(props){
    super(props)
    this.state ={
      items: ['milk','Cheese']
    }
  }


  addItems(item){
    const items = [...this.state.items]
    items.push(item)
    console.log("App-----------> Changing State---------> ", items)
    this.setState({
      items
    })
    localStorage.setItem('items',items)
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <div className="grid-x">
				  <div className="small-6 cell">
						<Form addItems={this.addItems.bind(this)}/>
				  </div>
				  <div className="small-6 cell">
            <List />
          </div>
				</div>
      </div>
    );
  }
}

export default App;
