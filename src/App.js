import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar/Nav';
import HomePage from './Components/HomePage/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Services from './Components/Services/Services';
import { onAuthStateChangedListener } from './Firebase/Firebase';
import SignIn from './Components/SignIn/SignIn';
import { getUserInformation } from './Firebase/Firebase';
import { setUser } from './Store/userReducer/userActions';
import { useDispatch } from 'react-redux';
import AddService from './Components/AddService/AddService';
import DashBoard from './Routes/AdminDashBoard/Dashboard';
import { getAllServicesDetails } from './Firebase/Firebase';
import { setServiceData,setServiceLoadingState } from './Store/services/serviceActions';
import ServicePage from './Components/ServicePage/ServicePage';
import OmOssPage from './Components/OmOss/OmOssPage';
import BookingPage from './Routes/Bookings/BookingPage';
import KontaktaOssPage from './Components/KontaktaOss/KontaktaOss';
import UpdateServicePage from './Routes/UpdateServicePage/UpdateServicePage';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    const LoadServices = async ()=>{
      try {
        const AllService = await getAllServicesDetails()
         dispatch(setServiceData(AllService))
      } catch (error) {
        console.log(error)
      }

      dispatch(setServiceLoadingState(false))
    }
    LoadServices()
  },[])

  
  useEffect( () => {
  const unsubscribe = onAuthStateChangedListener( async (user)=> {
    let userInfo;
    if (user) {  
       userInfo=  await getUserInformation (user.uid);
    } 

    dispatch(setUser(userInfo))

  });
  return unsubscribe;
}, []);

  return (
    <div>
      <Routes>
      <Route path='/' element={  <Navbar/>} > 
      <Route index element={<HomePage/>}/>
      <Route path='/Services/:serviceId' element={<ServicePage/>}/>
      <Route path='/Admin/SignIn' element={<SignIn/>}/>
      <Route path='/AddService' element={<AddService />}/>
      <Route path='/DashboardLinks' element={<DashBoard/>}/>
      <Route path='/Booking' element={<BookingPage/>}/>
      <Route path='/OmOss' element={<OmOssPage/>}/>
      <Route path="/KontaktaOss" element={<KontaktaOssPage />}/>
      <Route path='/UpdateService/:serviceId' element={<UpdateServicePage />}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
