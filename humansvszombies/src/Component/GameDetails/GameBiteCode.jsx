import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { useState, useEffect} from 'react';

const GameBiteCode = (player) => {
    const [ isHuman, setIsHuman] = useState(false);

    useEffect(() => {
        setIsHuman(player.isHuman)
    }, []);

    return(
        <>
            <div id="gameBiteCode" className="text-center">
                <header>
                    <h2>Bite Code</h2>
                </header>
                {isHuman ? <div className="biteCode"><p>1234567890</p></div> : null}
                {!isHuman ? 
                <div class="input-group" id="biteCodeInput">
                    <input type="text" class="form-control" placeholder="Write your bite code" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <button class="btn btn-dark" type="button" id="button">OK</button>
                </div> : null}
            </div>
        </>
    )
}

export default GameBiteCode