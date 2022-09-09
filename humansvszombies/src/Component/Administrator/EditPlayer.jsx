import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const EditPlayer = () =>{

    const [showModal3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <div className='form-inline' >
            <form>
                <Dropdown>
                <Dropdown.Toggle className="py-0"> Choose a player to edit</Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow3}>Player</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow3}>Player 2</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow3}>Player 3</Dropdown.Item>
                    <Modal show={showModal3} onHide={handleClose3}>
                        <ModalHeader>ZombieGame</ModalHeader>
                        <ModalBody>
                        <div className='adminFormContainer'>
                            <form className='form-inline' id='editPlayerForm'>
                            <h6 className='headerEditGameform'>Edit Player</h6>
                            <label>State</label>
                            <input type="text" className='form-control' placeholder='State'></input>
                            <label>Latitude</label>
                            <input type="text" className='form-control' placeholder='Latitude'></input>
                            <label>Longitude</label>
                            <input type="text" className='form-control' placeholder='Longitude'></input>
                            </form>
                        </div>
                        </ModalBody>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose3}>Close</Button>
                        <Button variant="primary" onClick={handleClose3}>Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
                    </Dropdown.Menu>
                </Dropdown>
            </form>
    </div>
    )
} 

export default EditPlayer