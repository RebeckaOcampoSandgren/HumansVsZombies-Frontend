import { useState} from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import React from 'react';
import '../../App.css';
import { createMission } from '../../api/missions';

const CreateMission = ({gameData}) => {
    //Hooks
    const {register, handleSubmit, errors} = useForm();
    const [selectedGame, setSelectedGame]=useState({});
    const [showModal, setShow] = useState(false);
    const [ apiError, setApiError] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Event handlers
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

    //Handle create mission button's submit and closes create mission modal
    const onSubmit = async (data) => {
        data.gameId = selectedGame.gameId;
        const [ error, userResponse ] = await createMission(data)
        if (error !== null){
            setApiError(error)
        }
        if(userResponse !== null){
            alert("A new mission has been created.");
            handleClose();
            window.location.reload();
        }
    };

    return(
        <div className='form-inline'>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle id='dropdown' className='adminDropdown'>Choose a game to add a mission to</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {gameData.map(d =>
                        <Dropdown.Item eventKey={d.gameId} key={d.gameId} onClick={handleShow}>{d.gameName}</Dropdown.Item>
                    )}
                    <Modal show={showModal} onHide={handleClose}>
                      <ModalHeader>{selectedGame.gameName}</ModalHeader>
                      <ModalBody>
                        <div>
                          <form id='addMissionForm' onSubmit={handleSubmit(onSubmit)}>
                            <h6 className='headerEditGameform'>Create mission</h6>
                            <label>Name of the mission</label>
                            <input type="text" className='form-control' placeholder='Name of the mission' {...register("missionName")}></input>
                            <input type="checkbox" className='adminCheckbox' {...register("isHumanVisible")}></input>
                            <label>Is human visible</label><br/>
                            <input type="checkbox" className='adminCheckbox' {...register("isZombieVisible")}></input>
                            <label>Is zombie visible</label><br/>
                            <label>Description</label>
                            <textarea className='form-control' placeholder='Mission description' {...register("description")}></textarea>
                            <label>Start time</label>
                            <input type="datetime-local" className='form-control' {...register("startTime")}></input>
                            <label>End time</label>
                            <input type="datetime-local" className='form-control' {...register("endTime")}></input>
                            <input type="submit" value="Create mission" className='submitGame'></input>
                          </form>
                        </div>
                      </ModalBody>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </Dropdown.Menu>
              </Dropdown>
        </div>     
    )
}

export default CreateMission