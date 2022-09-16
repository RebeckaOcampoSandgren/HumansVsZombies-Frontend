import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import keycloak from '../keycloak';
import Cards from '../Component/GameCards/Cards'
import { loginUser } from '../api/user';
import monster from '../IMG/monster.png';

function LandingPage() {

    const [selectedUser, setSelectedUser] = useState({ userId: "", firstName: "", lastName: "", isAdmin: "" });
    const [apiError, setApiError] = useState(null)

    const logIn = async (selectedUser) => {
        const [error, userResponse] = await loginUser(selectedUser)
        if (error !== null) {
            setApiError(error)
        }
    }

    useEffect(() => {
        if (keycloak.auth() === true) {
            let userObject = { userId: keycloak.userId(), firstName: keycloak.userName(), lastName: keycloak.lastName(), isAdmin: false }
            setSelectedUser({
                ...selectedUser,
                ...userObject
            })
            logIn(userObject)
        }
    }, [])

    return (
        <>
            <div className="LandingPagedDiv" style={{
                backgroundImage: `url(${monster})`, backgroundSize: 'cover',
                backgroundRepeat: 'repeat-y',
                backgroundPosition: 'center',
                height: '100%',
                }} >

                <h1 id="LandingPageTitle">Games</h1>
                <h2 id="WelcomLandingPage">Welcome {keycloak.userName()}</h2>
                <h2 id="WelcomLandingPage">Welcome {selectedUser.userId}</h2>
                {keycloak.getToken() && (
                    <div>
                        <h4>Token</h4>
                        <pre>{keycloak.getToken()}</pre>

                    </div>
                )}
                <Cards />

            </div>
        </>
    );
}
export default LandingPage