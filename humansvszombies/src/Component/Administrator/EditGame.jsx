import { DropdownButton, Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { updateGame } from '../../api/game';

const EditGame = ({gameData}) =>{
    //Hooks
    const [selectedGame,setSelectedGame]=useState({});
    const [showModal, setShow] = useState(false);
    const [ apiError, setApiError] = useState(null);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Event handlers
    //On change update the game object
    const updateGameObject = e => {
        const fieldname = e.target.name
        setSelectedGame(existingValues => ({
            ...existingValues,
            //update the current field
            [fieldname]: e.target.value
        }))
    }

    //Set selected game from drop down select
    const handleSelect = (e) => {
        let gameObject = findGameById(parseInt(e));
        setSelectedGame({
            ...selectedGame,
            ...gameObject
          })
    } 

    //Find game in data array by gameId
    function findGameById(id) {
        return gameData.find((element) => {
          return element.gameId === id;
        })
    }

    //Handle update game button's submit and closes the modal
    const onSubmit = async () => {
        const [ error, userResponse ] = await updateGame(selectedGame, selectedGame.gameId)
        if (error !== null){
            setApiError(error)
        }
        if(userResponse !== null){
            alert("The game has been updated");
            handleClose();
            window.location.reload();
        }
    };

    return(
        <div className='form-inline'>
            <form>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle className='adminDropdown'> Choose a game to edit</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {gameData.map(d =>
                        <Dropdown.Item eventKey={d.gameId} key={d.gameId} onClick={handleShow}>{d.gameName}</Dropdown.Item>
                    )}
                    <Modal show={showModal} onHide={handleClose}>
                      <ModalHeader>{selectedGame.gameName}</ModalHeader>
                      <ModalBody>
                        <div>
                          <form id='editGameForm'>
                            <h6 className='headerEditGameform'>Edit game</h6>
                            <label>Name</label>
                            <input type="text" className='form-control' placeholder='Name' name='gameName' value={selectedGame.gameName}
                            onChange={updateGameObject}></input>
                            <label>State</label>
                            <input type="text" className='form-control' placeholder='State' name='gameState' value={selectedGame.gameState}
                            onChange={updateGameObject}></input>
                            <label>Description</label>
                            <textarea className='form-control' placeholder='Description' name='description' value={selectedGame.description}
                            onChange={updateGameObject}></textarea>
                            <label>Northwest latitude</label>
                            <input type="text" className='form-control' placeholder='Northwest Latitude' name='nwLat' value={selectedGame.nwLat}
                            onChange={updateGameObject}></input>
                            <label>Northwest longitude</label>
                            <input type="text" className='form-control' placeholder='Northwest Longitude' name='nwLng' value={selectedGame.nwLng}
                            onChange={updateGameObject}></input>
                            <label>Southeast latitude</label>
                            <input type="text" className='form-control' placeholder='Southeast Latitude' name='seLat' value={selectedGame.seLat}
                            onChange={updateGameObject}></input>
                            <label>Southeast longitude</label>
                            <input type="text" className='form-control' placeholder='Southeast Longitude' name='seLng' value={selectedGame.seLng}
                            onChange={updateGameObject}></input>
                          </form>
                        </div>
                      </ModalBody>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={onSubmit}>Save Changes</Button>
                      </Modal.Footer>
                    </Modal>
                  </Dropdown.Menu>
              </Dropdown>
            </form>
        </div>     
    ) 
} 

export default EditGame