import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const GlobalModal = ({ isOpen, toggle, form }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Task Information</ModalHeader>
      <ModalBody>
        <h1>Modal</h1>
        <div className="d-flex flex-column gap-2">
          <form>

        <input
              type="text"
              placeholder='Username'
              name="username"
              value={form.username || ''}
              className='form-control'
            />
            <input
              type="text"
              placeholder='Full name'
              name="fullname"
              value={form.fullname || ''}
              className='form-control'
            />
             <input
              type="number"
              placeholder='Phone number'
              name="phone"
              value={form.phone || ''}
              className='form-control'
            />
            <input
              type="password"
              placeholder='Password'
              name="password"
              value={form.password || ''}
              className='form-control'
            />
          </form>
        </div>
        
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default GlobalModal;
