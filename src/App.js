import React, { useState } from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import SiteHead from './components/SiteHead';
import Scroll from 'react-scroll';
import Contacts from './components/Contacts';
import MenuBurger from './components/MenuBurger';
import './App.scss';

var Element = Scroll.Element;

function App() {

  return (
    <>

      {/* <div className='preloader' >
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div> */}

      <main className='container'>
        <div className="App">
          <div className='menu'>
            <MenuBurger />
          </div>
          <Element name="section0" >
            <SiteHead />
          </Element>

          <Element name="section1" >
            <Features />
          </Element>

          <Element name="section2" >
            <Services />
          </Element>

          <Element name="section3" >
            <Portfolio />
          </Element>

          <Element name="section4" >
            <Contacts />
          </Element>

          <Element  >
            <Footer />
          </Element>

        </div>
      </main>
    </>
  );
}

export default App;
