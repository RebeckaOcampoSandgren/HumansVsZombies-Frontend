import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


  function AdministrationPage() {

    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* const [dropdownOpen, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const toogleModal = () => setModalOpen(!modalOpen); */


    return (
      <>
        <div className='adminDiv'>

          <h1>Welcome Administrator</h1>

          <div className='form-wrapper'>
            <div id='form1'>
              <form className='form-inline' >

                <h4 className='headerCreateNewGame'>Create a new Game</h4>
                <label>Name of the game</label>
                <input type="text" className='form-control' placeholder='Name of the game'></input>
                <label>State</label>
                <input type="text" className='form-control' placeholder='State'></input>
                <label>Latitude</label>
                <input type="text" className='form-control' placeholder='Latitude'></input>
                <label>Longitude</label>
                <input type="text" className='form-control' placeholder='Longitude'></input>
                <Button type="submit" className='creatBtn'> Click to create a game</Button>
              </form>
            </div>

            <div className='form-inline' id='form2' >
              <form>
                <h4>Choose a game to edit</h4>
                <Dropdown>
                  <Dropdown.Toggle className="py-0"> Choose a game to edit
                  <Dropdown.Menu>
                    <Dropdown.Item>ZombieGame</Dropdown.Item>

                    <Modal show={showModal} onHide={handleClose}>
                      <ModalHeader>ZombieGame</ModalHeader>
                      <ModalBody>
                        <div id='form1'>
                          <form className='form-inline' >
                            <h5 className='headerEditGameform'>Edit game</h5>
                            <label>Name of the game</label>
                            <input type="text" className='form-control' placeholder='Name of the game'></input>
                            <label>State</label>
                            <input type="text" className='form-control' placeholder='State'></input>
                            <label>Latitude</label>
                            <input type="text" className='form-control' placeholder='Latitude'></input>
                            <label>Longitude</label>
                            <input type="text" className='form-control' placeholder='Longitude'></input>
                            <Button type="submit" className='creatBtn'> Click to create a game</Button>
                          </form>
                        </div>
                      </ModalBody>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Dropdown.Menu>
                  </Dropdown.Toggle>
                </Dropdown>
               
              </form>
              

            </div>

            <div className='form-inline' id='form3' >
              <form>
                <h4>Choose player to edit stat</h4>
                <select id="EditPlayerStat">
                  <option value="">Select your option</option>
                  <option value="player1">Player 1</option>
                  <option value="player2">Player 2</option>
                  <option value="player3">Player 3</option>
                </select>
              </form>
            </div>
          </div>
        </div>

      </>
    );
  }
  export default AdministrationPage