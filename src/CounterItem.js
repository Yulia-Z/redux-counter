import React from 'react';
import './App.css';
import {connect} from "react-redux";
import { counterPlus, counterMinus} from "./actions";

function CounterItem(props) {
  return (
    <div>
      Counter name
      <button onClick={props.counterMinus}>-</button>
      {props.counter.value}
      <button onClick={props.counterPlus}>+</button>
      <button>DELETE</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counterData
});

const mapDispatchToProps = dispatch => ({
  counterPlus: () => dispatch(counterPlus()),
  counterMinus: () => dispatch(counterMinus())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterItem);
