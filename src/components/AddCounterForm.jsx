import React, { useState } from 'react';
import './App.css';
import {connect} from "react-redux";
import {addCounter} from "../redux/actions";
import faker from 'faker';
import BadDataInformation from "./BadDataInformation";

function AddCounterForm(props) {

  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [isBadData, setIsBadData] = useState(false);

  const onSubmit = () => {
    if (!name || isNaN(+value)) {
      setIsBadData(true)
    }
    else {
      props.addCounter({name, value: +value, id: faker.random.uuid()});
      setName('');
      setValue('');
    }
  };

  return (
      <div className='card mb-2'>
        <div className="card-body">
          <div className='row'>
            <div className="col text-center">
              <input type="text"
                     name='name'
                     value={name}
                     onChange={e => setName(e.target.value)}
                     className='form-control'
                     placeholder='counter name'
              />
            </div>
            <div className="col text-center">
              <input type="text"
                     name='value'
                     value={value}
                     onChange={e => setValue(e.target.value)}
                     className='form-control' placeholder='counter initial value'
              />
            </div>
            <div className="col text-center">
              <button onClick={() => onSubmit()} className='btn btn-outline-secondary'>Add counter</button>
              <BadDataInformation isOpen={isBadData} onSubmit={() => setIsBadData(false)}/>
            </div>
          </div>
        </div>
      </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addCounter: (newCounter) => dispatch(addCounter(newCounter))
});

export default connect(null, mapDispatchToProps)(AddCounterForm);
