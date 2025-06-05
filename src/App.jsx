import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import FoodDetails from "./components/FoodItem/FoodDetails";
import Cart from './pages/Cart/Cart'
import Solar from './pages/Services/Solar'
import Service from './pages/Services/Service'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import Support from './pages/Services/support'
import Ourteam from './pages/Services/ourteam';
import Feedback from  './pages/Services/feedback';
import Aboutus from './pages/aboutus';
import Privacypolicy from "./pages/privacypolicy"
import MyOrders from './pages/MyOrders/MyOrders'
import Blog from './pages/Blog'
import Services from './pages/Services/services'
import SolarForm from './pages/Services/solarform'
import ACService from './pages/Services/ACService'
import SolarService from './pages/Services/SolarService'
import WashingMachineService from './pages/Services/WashingMachineService'
import WaterPurifierService from './pages/Services/WaterPurifierService'
import Refrigeratorservice from './pages/Services/RefrigeratorService'


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";



const App = () => {

const [showLogin, setShowLogin] = useState(false)

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
     <Navbar setShowLogin={setShowLogin} /> 
<ScrollToTop/>
     <Routes>
     
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/food/:id' element={<FoodDetails/>} />
        
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/solar' element={<Solar />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/support' element={<Support/>} />
        <Route path='/ourteam' element={<Ourteam/>} />
        <Route path='/feedback' element={<Feedback/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/privacypolicy' element={<Privacypolicy/>} />
        <Route path='/solarform' element={<SolarForm />} />
        <Route path='/Service' element={<Service/>} />
        <Route path='/Services/ac' element={<ACService />} />
        <Route path='/Services/services' element={<Services />} />
        <Route path='/Services/solar' element={<SolarService />} />
        <Route path='/Services/washingMachine' element={<WashingMachineService />} />
        <Route path='/Services/waterPurifier' element={<WaterPurifierService/>} />
        <Route path='/Services/refrigerator' element={<Refrigeratorservice/>} />
        
        
     </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
