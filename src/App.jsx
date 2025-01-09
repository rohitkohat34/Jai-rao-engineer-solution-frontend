import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import ACService from './pages/Services/ACService'
import SolarService from './pages/Services/SolarService'
import WashingMachineService from './pages/Services/WashingMachineService'
import WaterPurifierService from './pages/Services/WaterPurifierService'
import Refrigeratorservice from './pages/Services/RefrigeratorService'

const App = () => {

const [showLogin, setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
     <Navbar setShowLogin={setShowLogin} /> 

     <Routes>
     
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
        
        <Route path='/Services/ac' element={<ACService />} />
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
