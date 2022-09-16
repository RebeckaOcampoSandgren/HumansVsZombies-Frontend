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

    const logIn = async (user) => {
        console.log(user)
        const [error, userResponse] = await loginUser(user)
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
            <div className="LandingPagedDiv">
                <h1 id="LandingPageTitle">Games</h1>
                {keycloak.getToken() && (
                    <div>
                        <h2 id="WelcomLandingPage">Welcome {keycloak.userName()}</h2>
                    </div>
                )}
                <Cards />
            </div>
        </>
    );
}
export default LandingPage