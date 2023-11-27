import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar/Nav';
import HomePage from './Components/HomePage/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Slider from './Components/HomePage/Slider/Slider';
import Services from './Components/Services/Services';
import SignIn from './Components/SignIn/SignIn';
function App() {
  return (
    <div>

      <Routes>
      <Route path='/' element={  <Navbar/>} > 
      <Route index element={<HomePage/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Admin/SignIn' element={<SignIn/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
