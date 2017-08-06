const todoItems = (state = [], action) => {
	switch(action.type){
		case "ADD_ITEMS":
			return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text
          }
        ]
      })
    default:
      return state
	}
}
export default todoItems