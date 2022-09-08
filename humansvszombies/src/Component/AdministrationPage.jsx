import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MediaQuery from './MediaQuery';


function AdministrationPage() {

  const [showModal, setShow] = useState(false);
  const [showModal2, setShow2] = useState(false);
  const [showModal3, setShow3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


  return (
    <>
      <div className='adminDiv'>
        <h1>Welcome Administrator</h1>
        <div className='form-wrapper'>
          <div id='form1'>
            <Button onClick={handleShow2}>Click to create a game</Button>
            <Modal show={showModal2} onHide={handleClose2}>
              <ModalHeader>ZombieGame</ModalHeader>
              <ModalBody>
                <div id='form1'>
                  <form className='form-inline' >
                    <h6 className='headerEditGameform'>Create a game</h6>
                    <label>Name of the game</label>
                    <input type="text" className='form-control' placeholder='Name of the game'></input>
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
                <Button variant="secondary" onClick={handleClose2}>Close</Button>
                <Button variant="primary" onClick={handleClose2}>Create a game</Button>
              </Modal.Footer>
            </Modal>
          </div>

          <div className='form-inline' id='form2' >
            <form>
              <Dropdown>
                <Dropdown.Toggle className="py-0"> Choose a game to edit</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleShow}>ZombieGame</Dropdown.Item>
                    <Modal show={showModal} onHide={handleClose}>
                      <ModalHeader>ZombieGame</ModalHeader>
                      <ModalBody>
                        <div id='form1'>
                          <form className='form-inline' >
                            <h6 className='headerEditGameform'>Edit game</h6>
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
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                      </Modal.Footer>
                    </Modal>
                  </Dropdown.Menu>
              </Dropdown>
            </form>
          </div>
          <div className='form-inline' id='form3' >

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
                        <div id='form1'>
                          <form className='form-inline' >
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
        </div>
      </div>

    </>
  );
}
export default AdministrationPage