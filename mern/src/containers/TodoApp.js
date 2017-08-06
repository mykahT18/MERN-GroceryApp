import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	showItems,
	addItems,
	deleteItems,
	editItems
} from '../core-module/actions'
import App from '../app'


const mapStateToProps = (state) => {
  let todos = state.todos
  return {
    todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    showItems,
    addItems,
    deleteItems,
    editItems
  }, dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(App)