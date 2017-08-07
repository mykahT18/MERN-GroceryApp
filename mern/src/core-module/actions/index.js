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
export const deleteItems = (item) => {
	return{
		type: "DELETE_ITEMS",
		item
	}
}
// Edit Items
export const editItems = (item) => {
	return{
		type: "EDIT_ITEMS",
		item
	}
}
