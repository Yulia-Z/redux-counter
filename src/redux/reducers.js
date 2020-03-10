const initialState = {
  counters: [
    {
      id: 123,
      name: 'First counter',
      value: 1
    },
    {
      id: 234,
      name: 'Second counter',
      value: 1
    }
  ]
};

function counter(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER_PLUS':
      return {
        ...state,
        counters: state.counters
            .map(counter => counter.id === action.payload
                ? {...counter, value: counter.value + 1} : counter)
      };
    case 'COUNTER_MINUS':
      return {
        ...state,
        counters: state.counters
            .map(counter => counter.id === action.payload
                ? {...counter, value: counter.value - 1} : counter)
      };
    case 'RESET_TOTAL_COUNT':
      return {
        ...state,
        counters: state.counters
            .map(counter => ({...counter, value: 0}))
      };
    default:
      return state;
  }
}

export default counter;
