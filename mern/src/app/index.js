import React from 'react';
import './App.css';
import '../foundation-6.4.1-complete/css/foundation.min.css'

// Components
import Header from '../components/Header'
import Form from '../components/Form'
import List from '../components/List'


const App = ({
  todos,
  showItems,
  addItems,
  deleteItems,
  editItems,
  editingItem
}) => (
      <div className="App">
        <Header />
        <div className="grid-x">
          <div className="small-6 cell">
            <Form add={addItems} />
          </div>
          <div className="small-6 cell">
            <List todos={todos} deleteItems={deleteItems} editItems={editItems} editingItem={editingItem} />
          </div>
        </div>
      </div>
    );
export default App;
