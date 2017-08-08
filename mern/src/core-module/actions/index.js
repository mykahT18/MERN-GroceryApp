// show Items on page
export const showItems = () => {
	return{
		type: "SHOW_ITEMS"
	}
}
// Add Items to list
export const addItems = (item) => {
	console.log("--- before ACTION -----")
	return{
		type: "ADD_ITEMS",
		item
	}
}
// Delete Items
export const deleteItems = (id) => {
	return{
		type: "DELETE_ITEMS",
		id
	}
}
// Edit Items
export const editItems = (id, item) => {
	return{
		type: "EDIT_ITEMS",
		id,
		item
	}
}
// switch to edit input
export const editingItem = (id, isEditing) => {
	return{
		type: "SHOW_EDIT",
		id,
		isEditing
	}
}