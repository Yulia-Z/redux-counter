import React from 'react';
import './App.css';
import {connect} from "react-redux";
import CounterItem from "./CounterItem";
import deleteConfirmation, {counterMinus, counterPlus, resetCounter} from "./redux/actions";

function CounterList(props) {
  return (
      <div>
        {props.counters
            .map(counter => <CounterItem key={counter.id}
                                         counter={counter}
                                         increment={() => props.counterPlus(counter.id)}
                                         decrement={() => props.counterMinus(counter.id)}
                                         reset={() => props.resetCounter(counter.id)}
                                         deleteConfirmation={() => props.deleteConfirmation(counter.id)}
            />)}

      </div>
  );
}

const mapStateToProps = state => ({
  counters: state.counters
});

const mapDispatchToProps = dispatch => ({
  counterPlus: (id) => dispatch(counterPlus(id)),
  counterMinus: (id) => dispatch(counterMinus(id)),
  resetCounter: (id) => dispatch(resetCounter(id)),
  deleteConfirmation: (id) => dispatch(deleteConfirmation(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
