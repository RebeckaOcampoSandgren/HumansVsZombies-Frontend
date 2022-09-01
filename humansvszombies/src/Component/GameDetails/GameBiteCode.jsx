import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

const GameBiteCode = () => {
    return(
        <>
            <div className="gameBiteCode">
                <header>
                    <h2>Bite Code:</h2>
                </header>
                <div className="biteCode">
                    <p>1234567890</p>
                </div>
                <div class="input-group mb-3">
                    <div class="row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Write your bite code" aria-label="Recipient's username" aria-describedby="button-addon2" className="Entry"></input>
                        </div>
                        <div class="col">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Select</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GameBiteCode