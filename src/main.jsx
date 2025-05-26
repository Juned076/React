import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Signup from "./component/Signup.jsx"
import Login from './component/Login.jsx';
import Contact from './component/Contact.jsx';
import Service from './component/Service.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
