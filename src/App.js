import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar/Nav';
import HomePage from './Components/HomePage/Home';
import { Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider/Slider';
function App() {
  return (
    <div>

      <Routes>
      <Route path='/' element={  <Navbar/>} > 
      <Route index element={<HomePage/>}/>

      </Route>



      </Routes>
    
    </div>
  );
}

export default App;
