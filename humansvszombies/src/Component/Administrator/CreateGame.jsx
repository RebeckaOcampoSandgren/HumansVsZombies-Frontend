import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGame } from "../../api/game";

//These configs for preventing errors
//minimum length of game name is 3
const gamenameConfig = {
  required: true,
  minLength: 3,
};

//minimum length of game state is 8 (which is shortest game state available)
const gamestateConfig = {
  required: true,
  minLength: 8,
};

const CreateGame = () => {
  //Hooks
  const { register, handleSubmit, errors } = useForm();
  const [showModal2, setShow2] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //Event Handlers
  //handle create game button's submit and closes create game modal
  const onSubmit = async (game) => {
    console.log(game)
    const [error, userResponse] = await createGame(game);
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      alert("A new game has been created.");
      handleClose2();
      window.location.reload();
    }
  };

  return (
    <div className="form-inline">
      <Button className="btn btn-dark" onClick={handleShow2}>
        Click to create a game
      </Button>
      <Modal show={showModal2} onHide={handleClose2}>
        <ModalHeader>ZombieGame</ModalHeader>
        <ModalBody>
          <div>
            <form id="createGameForm" onSubmit={handleSubmit(onSubmit)}>
              <h6 className="headerEditGameform">Create a game</h6>
              <label>Name of the game</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name of the game"
                {...register("gameName", gamenameConfig)}
              ></input>
              <label>State</label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                {...register("gameState", gamestateConfig)}
              ></input>
              <label>Description</label>
              <textarea
                className="form-control"
                placeholder="Description"
                name="gamestate"
                {...register("description")}
              ></textarea>
              <label>Latitude</label>
              <input
                type="text"
                className="form-control"
                placeholder="Latitude"
                {...register("nwLat", "seLat")}
              ></input>
              <label>Longitude</label>
              <input
                type="text"
                className="form-control"
                placeholder="Longitude"
                {...register("nwLng", "seLng")}
              ></input>
              <Button
                    variant="success"
                    type="submit" value="Create game" className='submitGame'
                  >
                    Create game
                  </Button>
            </form>
          </div>
        </ModalBody>
        <Modal.Footer>
          <Button className="btn btn-dark" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateGame;
