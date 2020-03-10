import React from 'react';
import './App.css';
import {connect} from "react-redux";
import { counterPlus, counterMinus} from "./actions";

function CounterItem(props) {

  return (
      <div className='card mb-2'>
        <div className='card-body'>
        <div className="row">
          <div className="col">
            {props.counter.name}
          </div>
          <div className="col">
            <button className='btn btn-outline-secondary' onClick={() => props.counterMinus(props.counter.id)}>-</button>
            <span className='ml-2 mr-2'>
              {props.counter.value}
            </span>
            <button className='btn btn-outline-secondary' onClick={() => props.counterPlus(props.counter.id)}>+</button>
          </div>
          <div className="col">
            <button className='btn btn-danger'>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
}



const mapDispatchToProps = dispatch => ({
  counterPlus: (id) => dispatch(counterPlus(id)),
  counterMinus: (id) => dispatch(counterMinus(id))
});

export default connect(null, mapDispatchToProps)(CounterItem);
