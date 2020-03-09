const initialState = {
  counterData: {
    name: 'First counter',
    value: 1
  }
};

function counter(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER_PLUS':
      return {
        ...state,
        counterData: {
          ...state.counterData,
          value: state.counterData.value + 1
        }
      };
    case 'COUNTER_MINUS':
      return {
        ...state,
        counterData: {
          ...state.counterData,
          value: state.counterData.value - 1
        }
      };
    default:
      return state;
  }
}

export default counter;
