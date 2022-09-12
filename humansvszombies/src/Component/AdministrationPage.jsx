import { useState, useEffect } from 'react';
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MediaQuery from './MediaQuery';
import CreateGame from './Administrator/CreateGame';
import EditGame from './Administrator/EditGame';
import EditPlayer from './Administrator/EditPlayer';
const apiUrl = process.env.REACT_APP_API_URL

function AdministrationPage() {
  //Hooks
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  //Get all the games to pass to edit game and edit player
  useEffect(() => {
    fetch(`${apiUrl}/Games`)
    .then((response) => response.json())
    .then((data) => {
      setIsLoaded(true);
      setError(error);
       setData(data);
     },
     (error) => {
        setIsLoaded(true);
        setError(error);
     }
     )
}, []);

  return (
    <>
      <div className='adminDiv'>
        <h1>Welcome Administrator</h1>
        <div className='form-wrapper'>
          <CreateGame/>
          <EditGame gameData = {data}/>
          <EditPlayer gameData = {data}/>
        </div>  
        </div>
    </>
  );
}
export default AdministrationPage