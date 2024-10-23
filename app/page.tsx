import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import HeroSection1 from './components/hero1';
import HeroSection2 from './components/hero2';
import HeroSection3 from './components/hero3';


 

const HomePage = (): React.JSX.Element => {
  return (
    
<div >      
      <Header />

    


            <HeroSection1 />
            <HeroSection2 />
            <HeroSection3 />

      
      <Footer />


      </div>

  
  );
};

export default HomePage;