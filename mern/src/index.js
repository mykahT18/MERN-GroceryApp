import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './app'
import registerServiceWorker from './registerServiceWorker'
import { loadState, saveState } from './loadStorage';


// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import root reducer
import rootReducer from './core-module/reducers'
import TodoApp from './containers/TodoApp'


const persistedState = loadState();
// Create a object for default data for state
const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// saving state into storage
store.subscribe(() => {
	saveState(store.getState());
})
ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>
		, document.getElementById('root'));
registerServiceWorker();
