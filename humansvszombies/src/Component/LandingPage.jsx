import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import keycloak from '../keycloak';
import Cards from '../Component/GameCards/Cards'



function LandingPage() {

    return (
        <>
            <div className="LandingPagedDiv" >

                <h1 id="LandingPageTitle">Games</h1>
                <h2>Welcome {keycloak.userName()}</h2>

                {keycloak.getToken() && (
                                    <div>
                                    <h4>Token</h4>
                                    <pre>{keycloak.getToken()}</pre>
                                    </div>
 )}
            <Cards/>

            </div>
        </>
    );
}
export default LandingPage