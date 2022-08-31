import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPageView from './Views/LandingPageView.jsx';


function App() {
  return (
   <BrowserRouter>
    <div className ="App">
    <Routes>
    <Route path= "/" element={<LandingPageView/>}/>
    </Routes>    
    </div>
   </BrowserRouter>
  );
}

export default App;
