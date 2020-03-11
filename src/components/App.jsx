import React from 'react';
import './App.css';
import {connect} from "react-redux";
import TotalCounter from "./TotalCounter";
import CounterList from "./CounterList";
import AddCounterForm from "./AddCounterForm";
import DeleteConfirmation from "./DeleteConfirmation";

function App(props) {

  return (
    <div className='container-md'>
      <TotalCounter counters={props.counters}/>
      <CounterList counters={props.counters}/>
      <AddCounterForm/>
      <DeleteConfirmation/>
    </div>
  );
}
const mapStateToProps = state => ({
  counters: state.counters
});

export default connect(mapStateToProps)(App);
