export function counterPlus(id) {
  return {type: 'COUNTER_PLUS', payload: id};
}

export function counterMinus(id) {
  return {type: 'COUNTER_MINUS', payload: id};
}

export function resetTotalCount(dispatch) {
  return {type: 'RESET_TOTAL_COUNT'};
}

export function addCounter(newCounter) {
  return {type: 'ADD_COUNTER', payload: newCounter};
}
