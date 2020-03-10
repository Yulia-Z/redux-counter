import React from 'react';
import './App.css';

function CounterItem(props) {

  return (
      <div className='card mb-2'>
        <div className='card-body'>
        <div className="row">
          <div className="col">
            {props.counter.name}
          </div>
          <div className="col">
            <button className='btn btn-outline-secondary' onClick={props.decrement}>-</button>
            <span className='ml-2 mr-2'>
              {props.counter.value}
            </span>
            <button className='btn btn-outline-secondary' onClick={props.increment}>+</button>
          </div>
          <div className="col">
            <button className='btn btn-danger'>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterItem;
