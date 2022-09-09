import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import CreateGame from './Administrator/CreateGame';
import EditGame from './Administrator/EditGame';
import EditPlayer from './Administrator/EditPlayer';


function AdministrationPage() {

  return (
    <>
      <div className='adminDiv'>
        <h1>Welcome Administrator</h1>
        <div className='form-wrapper'>
          <CreateGame/>
          <EditGame/>
          <EditPlayer/>
        </div>  
        </div>
    </>
  );
}
export default AdministrationPage