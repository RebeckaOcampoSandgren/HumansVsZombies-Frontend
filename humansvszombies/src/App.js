import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPageView from './Views/LandingPageView.jsx';
import GameDetails from './Views/GameDetails.jsx'


function App() {
  return (
   <BrowserRouter>
    <div className ="App">
    <Routes>
    <Route path= "/" element={<LandingPageView/>}/>
    <Route path= "/gamedetails" element={<GameDetails/>}/>
    </Routes>    
    </div>
   </BrowserRouter>
  );
}

export default App;
