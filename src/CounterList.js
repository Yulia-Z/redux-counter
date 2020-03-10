import React from 'react';
import './App.css';
import {connect} from "react-redux";
import CounterItem from "./CounterItem";
import {counterMinus, counterPlus} from "./actions";

function CounterList(props) {
  return (
      <div>
        {props.counters
            .map(counter => <CounterItem key={counter.id}
                                         counter={counter}
                                         increment={() => props.counterPlus(counter.id)}
                                         decrement={() => props.counterMinus(counter.id)}/>)}

      </div>
  );
}

const mapStateToProps = state => ({
  counters: state.counters
});

const mapDispatchToProps = dispatch => ({
  counterPlus: (id) => dispatch(counterPlus(id)),
  counterMinus: (id) => dispatch(counterMinus(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
