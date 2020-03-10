import React from 'react';
import './App.css';
import {connect} from "react-redux";
import TotalCounter from "./TotalCounter";
import CounterList from "./CounterList";

function App(props) {

  return (
    <div className="App">
      <TotalCounter counters={props.counters}/>
      <CounterList counters={props.counters}/>
    </div>
  );
}
const mapStateToProps = state => ({
  counters: state.counters
});

export default connect(mapStateToProps)(App);
