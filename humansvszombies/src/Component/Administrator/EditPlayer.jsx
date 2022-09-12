import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import { updatePlayer } from '../../api/player';
const apiUrl = process.env.REACT_APP_API_URL

const EditPlayer = ({gameData}) =>{
    //Hooks
    const [selectedGame, setSelectedGame]=useState({});
    const [selectedPlayer, setSelectedPlayer]=useState({});
    const [showModal, setShow3] = useState(false);
    const [showPlayerDropdown, setShowDropdown] = useState(false);
    const [players, setPlayers] = useState([]);
    const [ apiError, setApiError] = useState(null);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleShowDropdown = () => setShowDropdown(true);

    //Get players from chosen game
    const getPlayers = (gameId) => {
        fetch(`${apiUrl}/games/${gameId}/players`)
        .then((response) => response.json())
        .then((data) => {
            // update the state
            setPlayers(data)
        },
        (error) => {
            setApiError(error)
        })
    };

    //Find game in data array by gameId
    function findGameById(id) {
        return gameData.find((element) => {
          return element.gameId === id;
        })
    }

    //Find game in data array by gameId
    const findPlayerById = (id) => {
        return players.find((element) => {
            return element.playerId === id;
          })
    }

    //On change update the player object
    const updatePlayerObject = e => {
        const fieldname = e.target.name
        setSelectedPlayer(existingValues => ({
            ...existingValues,
            //update the current field
            [fieldname]: e.target.value
        }))
    }

    //Handle the game selection
    const handleGameSelect = (gameId) => {
        handleShowDropdown();
        getPlayers(gameId);
        let gameObject = findGameById(parseInt(gameId));
        setSelectedGame({
            ...selectedGame,
            ...gameObject
        })
    } 

    //Handle the player selection
    const handlePlayerSelect = (playerId) => {
        let playerObject = findPlayerById(parseInt(playerId));
        setSelectedPlayer({
            ...selectedPlayer,
            ...playerObject
        })
    } 

    //Handle update player button's submit and closes the modal
    const onSubmit = async () => {
        selectedPlayer.isHuman = (selectedPlayer.isHuman === "true");
        selectedPlayer.isPatientZero = (selectedPlayer.isPatientZero === "true");

        const [ error, userResponse ] = await updatePlayer(selectedPlayer, selectedPlayer.playerId)
        if (error !== null){
            setApiError(error)
        }
        if(userResponse !== null){
            alert("The player has been updated");
            handleClose3();
            window.location.reload();
        }
    };

    return (
        <div id='editPlayerContainer' className='form-inline'>
            <div id='editPlayerGame'>
            <Dropdown onSelect={handleGameSelect}>
                <Dropdown.Toggle className="py-0">Choose a game to edit players in</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {gameData.map(d =>
                        <Dropdown.Item eventKey={d.gameId} key={d.gameId}>{d.gameName}</Dropdown.Item>
                    )}
                  </Dropdown.Menu>
            </Dropdown>
        </div>

        <div id='editPlayer'>
            { showPlayerDropdown ?
            <Dropdown onSelect={handlePlayerSelect}>
                <p>{selectedGame.gameName}</p>
                <Dropdown.Toggle className="py-0">Choose a player to edit</Dropdown.Toggle>
                <Dropdown.Menu>
                    {players.map(d =>
                        <Dropdown.Item eventKey={d.playerId} key={d.playerId} onClick={handleShow3}>{d.playerId}</Dropdown.Item>
                    )}
                <Modal show={showModal} onHide={handleClose3}>
                    <ModalHeader>Player {selectedPlayer.playerId}</ModalHeader>
                    <ModalBody>
                        <div className='adminFormContainer'>
                            <form id='editPlayerForm'>
                            <h6 className='headerEditGameform'>Edit Player</h6>
                            <label>Is human</label>
                            <input type="text" className='form-control' placeholder='Is human' name='isHuman' value={selectedPlayer.isHuman}
                            onChange={updatePlayerObject}></input>
                            <label>Is patient zero</label>
                            <input type="text" className='form-control' placeholder='Is patient zero' name='isPatientZero' value={selectedPlayer.isPatientZero}
                            onChange={updatePlayerObject}></input>
                            </form>
                        </div>
                    </ModalBody>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>Close</Button>
                    <Button variant="primary" onClick={onSubmit}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>
                </Dropdown.Menu>
            </Dropdown>
            : null }
         </div>
        </div>
    )
} 

export default EditPlayer