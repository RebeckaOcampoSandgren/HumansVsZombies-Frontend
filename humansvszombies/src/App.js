import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPageView from './Views/LandingPageView.jsx';
import AdministrationPageView from './Views/AdministrationPageView';


function App() {
  return (
   <BrowserRouter>
    <div className ="App">
    <Routes>
    <Route path = '/LandingPageView' element={<LandingPageView/>}/>
    <Route path ='/AdministrationPageView' element={<AdministrationPageView/>}/>
    </Routes>    
    </div>
   </BrowserRouter>
  );
}

export default App;
