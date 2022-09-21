import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css";
import { createSquad } from '../../api/squad';

//minimum length of game name is 3
const squadnameConfig = {
    required: true,
    minLength: 3
}

const GameSquadCreation = ({game}) => {
        //Hooks
        const { register, handleSubmit, errors} = useForm()
        const [showModal2, setShow2] = useState(false);
        const [ apiError, setApiError] = useState(null) 
    
        const handleClose2 = () => setShow2(false);
        const handleShow2 = () => setShow2(true);

        //Event Handlers
        //handle create squad button's submit and closes create squad modal
        const onSubmit = async (squad) => {
            squad.gameId = game.gameId;
            const [ error, userResponse ] = await createSquad(squad)
            if (error !== null){
                setApiError(error)
            }
            if(userResponse !== null){
                alert("A new squad has been created.");
                handleClose2();
                window.location.reload();
            }
        };

    return(
        <>
            <div className='form-inline'>
                <Button onClick={handleShow2} className="btn btn-dark">Click to create a squad</Button>
                    <Modal show={showModal2} onHide={handleClose2}>
                        <ModalHeader>Squad</ModalHeader>
                        <ModalBody>
                            <div>
                                <form id='createGameForm' onSubmit={handleSubmit(onSubmit)}>
                                    <h6 className='headerEditGameform'>Create a squad</h6>
                                    <label>Name of the squad</label>
                                    <input type="text" className='form-control' placeholder='Name of the squad' {...register("squadName", squadnameConfig)}></input>
                                    <input type="checkbox" className='adminCheckbox' {...register("isHuman")}></input>
                                    <label>Is human </label><br/>
                                    <input type="submit" value="Create squad" className='submitGame'></input>
                                </form>
                            </div>
                        </ModalBody>
                    </Modal>      
            </div>
        </>
    )
}

export default GameSquadCreation