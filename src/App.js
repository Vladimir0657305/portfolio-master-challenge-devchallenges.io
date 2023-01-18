import './App.scss';
import Features from './components/Features';
import Footer from './components/Footer';
// import Main from './components/Main';
import Menu from './components/SiteMenu';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import SiteHead from './components/SiteHead';
import Scroll from 'react-scroll';
import Contacts from './components/Contacts';
import React, { useState, useContext } from 'react';
import MenuBurger from './components/MenuBurger';


var Element = Scroll.Element;




function App() {
  // const [menuOpenState, setMenuOpenState] = useContext(MyContext);
  // console.log(menuOpenState);
  // const ccc = useContext(MyContext);
  // console.log(ccc.isMenuOpen);

  return (
    <>
      {/* <Menu isOpen={ true } /> */}
      <main className='container'>
        <div className="App">
          <div className='menu'>
            <MenuBurger  />
          </div>
          <Element name="section0" >
            <SiteHead  />
          </Element>
          
          <Element name="section1" >
            <Features  />
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
            <Footer  />
          </Element>
          

        </div>
      </main>
    </>
  );
}

export default App;
