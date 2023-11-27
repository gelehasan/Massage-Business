import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar/Nav';
import HomePage from './Components/HomePage/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Slider from './Components/HomePage/Slider/Slider';
import Services from './Components/Services/Services';
import { onAuthStateChangedListener } from './Firebase/Firebase';
import SignIn from './Components/SignIn/SignIn';
import { getUserInformation } from './Firebase/Firebase';


function App() {

  useEffect( () => {
  const unsubscribe = onAuthStateChangedListener( async (user)=> {
    let userInfo;
    if (user) {  
       userInfo=  await getUserInformation (user.uid);
      
    } 

    console.log(userInfo)
   // dispatch(SetUser(userInfo))

  });
  return unsubscribe;
}, []);

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
