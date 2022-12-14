import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import keycloak from '../keycloak';
import Cards from '../Component/GameCards/Cards'
import { loginUser } from '../api/user';
import '../App.css';

function LandingPage() {
  const [selectedUser, setSelectedUser] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    isAdmin: "",
  });

  const [apiError, setApiError] = useState(null);

  //Login method to check if User exists already or need to be registred
  const logIn = async (user) => {
    const [error, userResponse] = await loginUser(user);
    if (error !== null) {
      setApiError(error);
    }
}

//Take the information of user from keycloak and store it
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
                <div id="gameCards">
                {keycloak.getToken() && (
                        <div>
                            <h2 id="WelcomLandingPage">Welcome {keycloak.userName()}</h2>
                        </div>
                    )}
                    <h1 id="LandingPageTitle">Games</h1>
                </div> 
            </div>
            <Cards/>
        </>
    );  
}

export default LandingPage
