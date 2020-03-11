import React, {useState} from 'react';
import './App.css';

function CounterItem(props) {

  const [editButtonIsVisible, setEditButtonIsVisible] = useState(true);
  const [newCounterName, setNewCounterName] = useState(props.counter.name);

  const editCounter = () => {
    setEditButtonIsVisible(false);
  };

  const saveCounter = () => {
    setEditButtonIsVisible(true);
    props.saveModifiedCounter(newCounterName);
  };

  return (
      <div className='card mb-2'>
        <div className='card-body'>
        <div className="row">
          <div className="col text-center">
            {editButtonIsVisible && <span>{newCounterName}</span>}
            {!editButtonIsVisible && <input type='text'
                                            name='name'
                                            value={newCounterName}
                                            className='form-control'
                                            disabled={editButtonIsVisible}
                                            onChange={e => setNewCounterName(e.target.value)}
                                            autoFocus/>}
          </div>
          <div className="col text-center">
            <button className='btn btn-outline-secondary' onClick={props.decrement}>-</button>
            <span className='m-3'>
              {props.counter.value}
            </span>
            <button className='btn btn-outline-secondary' onClick={props.increment}>+</button>
          </div>
          <div className="col text-center">
            <button className='btn btn-outline-secondary mr-2'
                    onClick={props.reset}><i className="fas fa-sync-alt"/></button>
            {editButtonIsVisible && <button className='btn btn-outline-primary mr-2' onClick={editCounter}><i className="fas fa-edit"/></button>}
            {!editButtonIsVisible && <button className='btn btn-outline-primary mr-2' onClick={saveCounter}><i className="far fa-save"/></button>}
            <button className='btn btn-outline-danger'
                    onClick={props.deleteConfirmation}><i className="fas fa-trash-alt"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterItem;
