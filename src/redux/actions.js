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

export default function deleteConfirmation(id) {
  return {type: 'DELETE_CONFIRMATION', payload: id};
}
