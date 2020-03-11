export function counterPlus(id) {
  return {type: 'COUNTER_PLUS', payload: id};
}

export function counterMinus(id) {
  return {type: 'COUNTER_MINUS', payload: id};
}

export function resetAll() {
  return {type: 'RESET_ALL'};
}

export function addCounter(newCounter) {
  return {type: 'ADD_COUNTER', payload: newCounter};
}

export function resetCounter(id) {
  return {type: 'RESET_COUNTER', payload: id};
}

export function deleteConfirmation(id) {
  return {type: 'DELETE_CONFIRMATION', payload: id};
}

export function counterDelete(id) {
  return {type: 'COUNTER_DELETE', payload: id};
}

export function resetCounterDeleteConfirmation() {
  return {type: 'RESET_COUNTER_DELETE_CONFIRMATION'};
}

export function saveModifiedCounter(id, newName) {
  return {type: 'SAVE_MODIFIED_COUNTER', payload: {id, newName}};
}
