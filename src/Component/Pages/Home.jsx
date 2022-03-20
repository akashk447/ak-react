import React,{useState,useEffect} from 'react';
import Cta from '../section/Cta';
import Banner from '../section/Banner';
import Features from '../section/Features';
import Footer from '../section/Footer';
import Services from '../section/Services';
import Partner from '../section/Partner';
import Loader from '../section/Loader';

const Home=()=>{
  const [isloading,setLoading]=useState(true);
useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 300);
},[]);
    return(
      <>
      
      <Banner/>
      <Features/>
      <Cta/>
      <Services/>
      <Partner/>
      <Footer/>
      {isloading?<Loader/>:""}
      
      </>
    );
}
export default Home;