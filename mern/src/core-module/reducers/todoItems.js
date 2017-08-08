const defaultState = {
  todos: [],
  isEditing: false
}
console.log("DEFAULT", defaultState)

const todoItems = (state = defaultState, action) => {
  console.log("State-> ", state.isEditing)
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
        state
      })
    case "EDIT_ITEMS":
      console.log("Editing Item ------> ", action)
    

    case "SHOW_EDIT":
      console.log("Switching to edit input", action.id, action.isEditing)
      
      console.log("djfalskdfjlksjdflaksdjflkjdsflk------", state)
      return{...state, isEditing: action.isEditing}
    
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