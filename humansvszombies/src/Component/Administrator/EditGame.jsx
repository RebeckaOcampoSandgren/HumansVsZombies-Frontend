import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const EditGame = () =>{
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className='form-inline'>
            <form>
              <Dropdown>
                <Dropdown.Toggle className="py-0"> Choose a game to edit</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow}>ZombieGame</Dropdown.Item>
                    <Modal show={showModal} onHide={handleClose}>
                      <ModalHeader>ZombieGame</ModalHeader>
                      <ModalBody>
                        <div className='adminFormContainer'>
                          <form className='form-inline' id='editGameForm'>
                            <h6 className='headerEditGameform'>Edit game</h6>
                            <label>State</label>
                            <input type="text" className='form-control' placeholder='State' name='gamestate'></input>
                            <label>Northwest latitude</label>
                            <input type="text" className='form-control' placeholder='Northwest Latitude' name='nwlatitude'></input>
                            <label>Northwest longitude</label>
                                <input type="text" className='form-control' placeholder='Northwest Longitude' name='nwlongitude'></input>
                                <label>Southwest latitude</label>
                                <input type="text" className='form-control' placeholder='Northwest Latitude' name='nwlatitude'></input>
                                <label>Southwest longitude</label>
                                <input type="text" className='form-control' placeholder='Northwest Longitude' name='nwlongitude'></input>
                          </form>
                        </div>
                      </ModalBody>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                      </Modal.Footer>
                    </Modal>
                  </Dropdown.Menu>
              </Dropdown>
            </form>
          </div>
    )
    
} 

export default EditGame