import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPageView from "./Views/LandingPageView";
import AdministrationPageView from "./Views/AdministrationPageView";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPageView from './Views/LandingPageView.jsx';
import GameDetails from './Views/GameDetails.jsx';
import GameMaps from './Views/GameMaps.jsx'


function App() {
  return (
   <BrowserRouter>
    <div className ="App">
    <Routes>
    <Route index path = "/" element={<LandingPageView />}/>
    <Route path = "/AdministrationPageView" element={<AdministrationPageView />}/>
    <Route path= "/" element={<LandingPageView/>}/>
    <Route path= "/gamedetails" element={<GameDetails/>}/>
    <Route path= "/map" element={<GameMaps/>}/>
    </Routes>    
    </div>
   </BrowserRouter>
  );
}

export default App;
