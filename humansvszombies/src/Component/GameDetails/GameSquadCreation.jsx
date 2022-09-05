import 'bootstrap/dist/css/bootstrap.min.css';

const GameSquadCreation = () => {
    return(
        <>
            <div id="squadCreation" className="text-center">
                <header>
                    <h2>Create new squad</h2>
                </header>
                <div class="input-group" id="squadCreationInput">
                    <input type="text" class="form-control" placeholder="Write squad name" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <button class="btn btn-outline-secondary" type="button" id="button">Create</button>
                </div>
            </div>

            <div id="SquadList" className="text-center">
                <header>
                    <h2>Available squads</h2>
                </header>
                <ul>
                    <li>
                        <div class="card w-50" id="card">
                            <div class="card-body">
                                <h5 class="card-title">Squad A</h5>
                                <p class="card-text">Squad Name: Scary Zombies</p>
                                <p class="card-text">Total number of members : 25</p>
                                <p class="card-text">Number of deceased numbers : 12</p>
                                <button class="btn btn-outline-secondary" type="button" id="button">Join</button>
                            </div>
                        </div>
                    </li>    
                    <li>
                        <div class="card w-50" id="card">
                            <div class="card-body">
                                <h5 class="card-title">Squad B</h5>
                                <p class="card-text">Squad Name: Crazy Zombies</p>
                                <p class="card-text">Total number of members : 12</p>
                                <p class="card-text">Number of deceased numbers : 1</p>
                                <button class="btn btn-outline-secondary" type="button" id="button">Join</button>                              
                            </div>
                        </div>
                    </li>    
                </ul>
            </div>
        </>
    )
}

export default GameSquadCreation