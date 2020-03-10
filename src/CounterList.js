import React from 'react';
import './App.css';
import {connect} from "react-redux";
import CounterItem from "./CounterItem";

function CounterList(props) {
  return (
      <div>
        {props.counters
            .map(counter => <CounterItem counter={counter}/>)}
      </div>
  );
}

const mapStateToProps = state => ({
  counters: state.counters
});

export default connect(mapStateToProps)(CounterList);
