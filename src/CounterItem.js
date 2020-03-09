import React from 'react';
import './App.css';
import {connect} from "react-redux";

function CounterItem(props) {
  return (
    <div>
      Counter name
      <button>-</button>
      {props.counter.value}
      <button>+</button>
      <button>DELETE</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.counterData
});


export default connect(mapStateToProps)(CounterItem);
