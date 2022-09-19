import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { updateMission } from "../../api/missions";
const apiUrl = process.env.REACT_APP_API_URL;

const EditMission = ({ gameData }) => {
  //Hooks
  const [selectedGame, setSelectedGame] = useState({});
  const [selectedMission, setSelectedMission] = useState({});
  const [showModal, setShow3] = useState(false);
  const [showMissionDropdown, setShowDropdown] = useState(false);
  const [missions, setMissions] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [isHumanVisible, setIsHumanVisible] = useState(false);
  const [isZombieVisible, setIsZombieVisible] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleShowDropdown = () => setShowDropdown(true);

  //Get missions from chosen game
  const getMissions = (gameId) => {
    fetch(`${apiUrl}/missions/${gameId}/missions`)
      .then((response) => response.json())
      .then(
        (data) => {
          // update the state
          setMissions(data);
        },
        (error) => {
          setApiError(error);
        }
      );
  };

  //Find game in data array by gameId
  function findGameById(id) {
    return gameData.find((element) => {
      return element.gameId === id;
    });
  }

  //Find mission in missions array by id
  const findMissionById = (id) => {
    return missions.find((element) => {
      return element.missionId === id;
    });
  };

  //On change update the mission object
  const updateMissionObject = (e) => {
    const fieldname = e.target.name;
    setSelectedMission((existingValues) => ({
      ...existingValues,
      //update the current field
      [fieldname]: e.target.value,
    }));
  };

  //Handle the game selection
  const handleGameSelect = (gameId) => {
    handleShowDropdown();
    getMissions(gameId);
    let gameObject = findGameById(parseInt(gameId));
    setSelectedGame({
      ...selectedGame,
      ...gameObject,
    });
  };

  //Handle the mission selection
  const handleMissionSelect = (missionId) => {
    let missionObject = findMissionById(parseInt(missionId));
    setSelectedMission({
      ...selectedMission,
      ...missionObject,
    });
  };

  //When the selected mission is changed, set isHumanVisible and isZombieVisible
  useEffect(() => {
    setIsHumanVisible(selectedMission.isHumanVisible);
    setIsZombieVisible(selectedMission.isZombieVisible);
  }, [selectedMission]);

  //Handle checkboxes change
  const onCheckboxChange = (e) => {
    if (e.target.name === "isHumanVisible") {
      setIsHumanVisible(e.target.checked);
    } else if (e.target.name === "isZombieVisible") {
      setIsZombieVisible(e.target.checked);
    }
  };

  //Handle update mission button's submit and closes the modal
  const onSubmit = async () => {
    selectedMission.isHumanVisible = isHumanVisible;
    selectedMission.isZombieVisible = isZombieVisible;
    const [error, userResponse] = await updateMission(
      selectedMission,
      selectedMission.missionId
    );
    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      alert("The mission has been updated");
      handleClose3();
      window.location.reload();
    }
  };

  return (
    <div className="form-inline">
      <div id="editMissionContainer">
        <div id="editMissionGame">
          <Dropdown onSelect={handleGameSelect}>
            <Dropdown.Toggle id="dropdown" className="adminDropdown">
              Choose a game to edit missions in
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {gameData.map((d) => (
                <Dropdown.Item eventKey={d.gameId} key={d.gameId}>
                  {d.gameName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div id="editMission">
          {showMissionDropdown ? (
            <Dropdown onSelect={handleMissionSelect}>
              <p>{selectedGame.gameName}</p>
              <Dropdown.Toggle id="dropdown" className="adminDropdown">
                Choose a mission to edit
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {missions.map((d) => (
                  <Dropdown.Item
                    eventKey={d.missionId}
                    key={d.missionId}
                    onClick={handleShow3}
                  >
                    {d.missionName}
                  </Dropdown.Item>
                ))}
                <Modal show={showModal} onHide={handleClose3}>
                  <ModalHeader>{selectedMission.missionName}</ModalHeader>
                  <ModalBody>
                    <div className="adminFormContainer">
                      <form id="editMissionForm">
                        <h6 className="headerEditGameform">Edit Mission</h6>
                        <label>Mission Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="missionName"
                          value={selectedMission.missionName}
                          onChange={updateMissionObject}
                        ></input>
                        <input
                          type="checkbox"
                          className="adminCheckbox"
                          name="isHumanVisible"
                          checked={isHumanVisible || ""}
                          onChange={onCheckboxChange}
                        ></input>
                        <label>Is human visible</label>
                        <br />
                        <input
                          type="checkbox"
                          className="adminCheckbox"
                          name="isZombieVisible"
                          checked={isZombieVisible || ""}
                          onChange={onCheckboxChange}
                        ></input>
                        <label>Is zombie visible</label>
                        <br />
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          placeholder="Description"
                          name="description"
                          value={selectedMission.description}
                          onChange={updateMissionObject}
                        ></textarea>
                        <label>Start time</label>
                        <input
                          type="datetime-local"
                          className="form-control"
                          name="startTime"
                          value={selectedMission.startTime}
                          onChange={updateMissionObject}
                        ></input>
                        <label>End time</label>
                        <input
                          type="datetime-local"
                          className="form-control"
                          name="endTime"
                          value={selectedMission.endTime}
                          onChange={updateMissionObject}
                        ></input>
                      </form>
                    </div>
                  </ModalBody>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Dropdown.Menu>
            </Dropdown>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default EditMission;
