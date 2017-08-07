const defaultState = {
  todos: []
}

const todoItems = (state = defaultState, action) => {
  // console.log("Todo reducer------->")
	switch(action.type){
		case "ADD_ITEMS":
    // console.log("Todo Switch------->", ...state.todos)
    console.log("Actions-------=> ", state )
			return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            name: action.item
          }
        ]
      })
    case "SHOW_ITEMS":
      console.log("------> Show All Items")
      return Object.assign({}, state, {
        todos: state
      })
    case "EDIT_ITEMS":
      console.log("Editing Item ------> ")
      return Object.assign({}, state, {
        
      })
    case "DELETE_ITEMS":
      console.log("Delete Item ------> ")
      return Object.assign({}, state, {
       todos: [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice(action.id + 1)
       ]
    })
    default:
      return state
	}
}
export default todoItems