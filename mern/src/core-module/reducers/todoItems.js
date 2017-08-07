const defaultState = {
  todos: [{
    text: 'Cheese'
  }]
}

const todoItems = (state = defaultState, action) => {
  // console.log("Todo reducer------->")
	switch(action.type){
		case "ADD_ITEMS":
    // console.log("Todo Switch------->", ...state.todos)
    console.log("Actions-------=> ", action )
			return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.item
          }
        ]
      })
    case "SHOW_ITEMS":
      console.log("------> Show All Items")
      return Object.assign({}, state, {
        todos: state
      })
    default:
      return state
	}
}
export default todoItems