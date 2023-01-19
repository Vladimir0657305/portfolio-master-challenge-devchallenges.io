import React from 'react';
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
      <div class="animationLoader">
        <svg class="animationLoader__image" role="img" xmlns="http://путь до SVG-картинки на вашем сайте" viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
          </path>
        </svg>
      </div>

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
