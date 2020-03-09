const initialState = {
  counterValue: 4,
  counterName: 'First counter'
};

function counter(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER_PLUS':
      return {
        ...state,
        counterValue: state.counterValue + 1
      };
    case 'COUNTER_MINUS':
      return {
        ...state,
        counterValue: state.counterValue - 1
      };
    default:
      return state;
  }
}

export default counter;
