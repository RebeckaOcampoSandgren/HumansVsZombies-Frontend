import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageView from "./Views/LandingPageView";
import RegisterPageView from "./Views/RegisterViewPage"
import AdministrationPageView from "./Views/AdministrationPageView";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameDetails from './Views/GameDetails.jsx';
import GameMaps from './Views/GameMaps.jsx'
import MediaQuery from './Component/MediaQuery';

function App() {
  const { width } = MediaQuery();

  return (
    <BrowserRouter>
      <div className="App" >
        {width > 400 && (
          <>
            <Routes>
              <Route index path="/" element={<LandingPageView />} />
              <Route path="/AdministrationPageView" element={<AdministrationPageView />}/>
              <Route path="/RegisterPageView" element={<RegisterPageView />} />
              <Route path="/" element={<LandingPageView />} />
              <Route path="/gamedetails" element={<GameDetails />} />
              <Route path="/map" element={<GameMaps />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
