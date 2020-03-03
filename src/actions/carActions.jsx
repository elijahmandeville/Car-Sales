export function updateTitle(removeFeature) {
  return { type: "REMOVE_FEATURE", payload: removeFeature };
}

export function addItem(newItem) {
  return { type: "ADD_ITEM", payload: newItem };
}
