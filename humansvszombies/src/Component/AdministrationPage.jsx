import Button from 'react-bootstrap/Button';

function AdministrationPage() {
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
              <select id="EditGame">
                <option value="">Select your option</option>
                <option value="zombieGame">Zombie Game</option>
                <option value="humanGame">Human Game</option>
                <option value="Hvz">Human vs Zombie</option>
              </select>
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