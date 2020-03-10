import React from 'react';
import './App.css';
import {resetTotalCount} from "./actions";
import {connect} from "react-redux";

function TotalCounter(props) {

  const total = props.counters.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <div className='card'>
      <div className="card-body">
        <h4 className='d-inline-block'>Total</h4>
        <h5 className='d-inline-block ml-3 mr-5'>{total}</h5>
        <button onClick={() => props.reset()} className='btn btn-warning'>Reset total count</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetTotalCount())
});

export default connect(null, mapDispatchToProps)(TotalCounter);
