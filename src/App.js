import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar/Nav';
import HomePage from './Components/HomePage/Home';
import { Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider/Slider';
import Services from './Components/Services/Services';
function App() {
  return (
    <div>

      <Routes>
      <Route path='/' element={  <Navbar/>} > 
      <Route index element={<HomePage/>}/>
      <Route path='/Services' element={<Services/>}/>


      </Route>



      </Routes>
    
    </div>
  );
}

export default App;
