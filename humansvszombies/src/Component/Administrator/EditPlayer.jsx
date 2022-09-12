import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
const apiUrl = process.env.REACT_APP_API_URL

const EditPlayer = ({gameData}) =>{
    //Hooks
    const [selectedGame, setSelectedGame]=useState({});
    const [selectedPlayer, setSelectedPlayer]=useState({});
    const [showModal, setShow3] = useState(false);
    const [showPlayerDropdown, setShowDropdown] = useState(false);
    const [players, setPlayers] = useState([]);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleShowDropdown = () => setShowDropdown(true);

    //Show the players dropdown when game is chosen
    const showPlayersDropdown = (e) => {
        console.log(e)
    } 

    // Function to collect data
    const getPlayers = (gameId) => {
        fetch(`${apiUrl}/games/${gameId}/players`)
        .then((response) => response.json())
        .then((data) => {
            // update the state
            setPlayers(data)
        },
        (error) => {
            console.log(error)
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
        console.log(findPlayerById(parseInt(playerId)));
        let playerObject = findPlayerById(parseInt(playerId));
        setSelectedPlayer({
            ...selectedPlayer,
            ...playerObject
        })
    } 

    return (
        <div id='editPlayerContainer' className='form-inline'>
            <div id='editPlayerGame'>
            <Dropdown onSelect={handleGameSelect}>
                <Dropdown.Toggle className="py-0">Choose a game to edit players in</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {gameData.map(d =>
                        <Dropdown.Item eventKey={d.gameId} key={d.gameId} onClick={showPlayersDropdown}>{d.gameName}</Dropdown.Item>
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
                        <input type="text" className='form-control' placeholder='State'></input>
                        <label>Is patient zero</label>
                        <input type="text" className='form-control' placeholder='Latitude'></input>
                        <label>Bite code</label>
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
            : null }
         </div>
        </div>
    )
} 

export default EditPlayer