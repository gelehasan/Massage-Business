import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar/Nav';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>

      <Routes>
      <Route index element={  <Navbar/>}>


      </Route>


      </Routes>
    
    </div>
  );
}

export default App;
