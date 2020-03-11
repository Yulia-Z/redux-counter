import React from 'react';
import './App.css';
import {resetAll} from "../redux/actions";
import {connect} from "react-redux";

function TotalCounter(props) {

  const total = props.counters.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <div className='card mb-2'>
      <div className="card-body">
        <div className="row">
          <div className="col text-center">
            <h4 className='d-inline-block'>Total</h4>
          </div>
          <div className="col text-center">
            <h5 className='d-inline-block'>{total}</h5>
          </div>
          <div className="col text-center">
            <button onClick={() => props.reset()} className='btn btn-warning'>Reset All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(resetAll())
});

export default connect(null, mapDispatchToProps)(TotalCounter);
