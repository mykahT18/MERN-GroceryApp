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
export const editItems = (id) => {
	return{
		type: "EDIT_ITEMS",
		id
	}
}
