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
    const [isHuman, setIsHuman] = useState(false); 
    const [isPatientZero, setIsPatientZero] = useState(false); 

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

    //When the selected player is changed, set isHuman and isPatientZero
    useEffect(()=>{
        setIsHuman(selectedPlayer.isHuman)
        setIsPatientZero(selectedPlayer.isPatientZero)
      }, [selectedPlayer])

    //Handle checkboxes change
    const onCheckboxChange = e => {
        if(e.target.name === 'isHuman'){
            setIsHuman(e.target.checked)
        }
        else if(e.target.name === 'isPatientZero'){
            setIsPatientZero(e.target.checked)
        }
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
        selectedPlayer.isHuman = isHuman;
        selectedPlayer.isPatientZero = isPatientZero;
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
                <Dropdown.Toggle id='dropdown' className='adminDropdown'>Choose a game to edit players in</Dropdown.Toggle>
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
                <Dropdown.Toggle className='adminDropdown'>Choose a player to edit</Dropdown.Toggle>
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
                            <input type="checkbox" className='adminCheckbox' name='isHuman' checked={isHuman || ''}
                            onChange={onCheckboxChange}></input>
                            <label>Is human</label><br/>
                            <input type="checkbox" className='adminCheckbox' name='isPatientZero' checked={isPatientZero || ''}
                            onChange={onCheckboxChange}></input>
                            <label>Is patient zero</label><br/>
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