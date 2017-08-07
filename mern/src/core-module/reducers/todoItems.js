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
    default:
      return state
	}
}
export default todoItems