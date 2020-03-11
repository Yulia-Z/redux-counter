import React from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function BadDataInformation(props) {

return (
        <Modal isOpen={props.isOpen} >
          <ModalHeader>
            <h4 className='text-danger'>Data for new counter is not valid!</h4>
          </ModalHeader>
          <ModalBody>
            Counter name should not be empty, counter initial value should be a number</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.onSubmit}>OK</Button>
          </ModalFooter>
        </Modal>
    )
}

export default BadDataInformation;
