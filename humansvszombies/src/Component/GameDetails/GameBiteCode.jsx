import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

const GameBiteCode = () => {
    return(
        <>
            <div id="gameBiteCode" className="text-center">
                <header>
                    <h2>Bite Code:</h2>
                </header>
                <div className="biteCode">
                    <p>1234567890</p>
                </div>
                <div class="input-group" id="BiteCodeInput">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div>
        </>
    )
}

export default GameBiteCode