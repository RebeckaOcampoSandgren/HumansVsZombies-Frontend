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
        </>
    )
}

export default GameSquadCreation