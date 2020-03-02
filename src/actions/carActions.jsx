export function updateTitle(removeFeature) {
  return { type: "REMOVE_FEATURE", payload: removeFeature };
}

export function buyItem(newItem) {
  return { type: "BUY_ITEM", payload: newItem };
}
