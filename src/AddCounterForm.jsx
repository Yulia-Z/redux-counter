import React, { useState } from 'react';
import './App.css';
import {connect} from "react-redux";
import {addCounter} from "./actions";
import faker from 'faker';

function AddCounterForm(props) {

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const onSubmit = () => {
    if (!name || isNaN(+value)) {
      alert('Please check your data! Counter name should not be empty, counter initial value should be a number')
    }
    else {
      props.addCounter({name, value: +value, id: faker.random.uuid()});
      setName('');
      setValue('');
    }
  };

  return (
    <div className='row'>
      <div className="col">
        <button onClick={() => onSubmit()} className='btn btn-outline-secondary'>Add counter</button>
      </div>
      <div className="col">
        <input type="text"
               name='name'
               value={name}
               onChange={e => setName(e.target.value)}
               className='form-control'
               placeholder='counter name'
        />
      </div>
      <div className="col">
        <input type="text"
               name='value'
               value={value}
               onChange={e => setValue(e.target.value)}
               className='form-control' placeholder='counter initial value'
        />
      </div>

    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addCounter: (newCounter) => dispatch(addCounter(newCounter))
});

export default connect(null, mapDispatchToProps)(AddCounterForm);
