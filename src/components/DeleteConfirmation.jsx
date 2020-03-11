import React, { useState } from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from "react-redux";
import {counterDelete, resetCounterDeleteConfirmation} from "../redux/actions";


function DeleteConfirmation(props) {

  const counterName = props.counterDeleteConfirmation.name || '';
  const [inputName, setInputName] = useState('');

  const deleteButtonClick = () => {
    props.counterDelete(props.counterDeleteConfirmation.id);
    props.resetCounterDeleteConfirmation();
    setInputName('');
  };

  const cancelButtonClick = () => {
    props.resetCounterDeleteConfirmation();
    setInputName('');
  };


return (
        <Modal isOpen={Boolean(counterName)} >
          <ModalHeader>Enter counter name <strong>{counterName}</strong> to delete</ModalHeader>
          <ModalBody>
            <input type='text'
                   name='name'
                   value={inputName}
                   className='form-control'
                   onChange={e => setInputName(e.target.value)}
                   autoFocus/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={cancelButtonClick}>Cancel</Button>{' '}
            <Button color="danger"
                    disabled={inputName.trim().toLowerCase() !== counterName.toLowerCase()}
                    onClick={deleteButtonClick}>Delete</Button>
          </ModalFooter>
        </Modal>
    )
}

const mapStateToProps = state => ({
  counterDeleteConfirmation: state.counterDeleteConfirmation
});

const mapDispatchToProps = dispatch => ({
  counterDelete: (id) => dispatch(counterDelete(id)),
  resetCounterDeleteConfirmation: () => dispatch(resetCounterDeleteConfirmation())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirmation);
