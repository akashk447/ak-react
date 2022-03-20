import logo from './logo.svg';
import './plugins/bootstrap/css/bootstrap.min.css';
import './plugins/icofont/icofont.min.css';
import './plugins/slick-carousel/slick/slick.css';
import './plugins/slick-carousel/slick/slick-theme.css';
import './plugins/style.css';
import Home from './Component/Pages/Home';
import Navbar from './Component/Pages/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Contact from './Component/section/Contact';
import React,{useState,useEffect} from 'react'
import Loader from './Component/section/Loader';

function App() {
  const [isloading,setLoading]=useState(true);
useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 300);
},[]);
  return (
  
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route exact="true" path="/contact" element={<Contact />} />
            {/* <Route path="*"  element={<Notfound/>}/> */}
          </Routes>
          {isloading?<Loader/>:""}
    </BrowserRouter>
    </>
  );
}

export default App;
